const path = require('path')
const http = require('https')
const fs = require('fs')
const yauzl = require('yauzl')
const shell = require('shelljs')
const utils = require('./utils')

shell.mkdir('-p', utils.twineFolder)

const tweegoLink = getTweegoLink()

utils.logClear()
utils.logAction('Downloading the tweego binary file from', tweegoLink)
utils.logInfo('Copyright(c) 2014 - 2018 Thomas Michael Edwards <thomasmedwards@gmail.com>.\nAll rights reserved.')

downloadAndExtract(tweegoLink, utils.tweegoZip).then(() => {
  utils.logAction('Downloading the story formats from', utils.links.storyFormats)

  downloadAndExtract(utils.links.storyFormats, utils.formatsZip).then(() => {
    utils.logSuccess('All done!')
  })
})

function downloadAndExtract (link, filePath) {
  return new Promise((resolve, reject) => {
    http.get(link, request).on('error', utils.logError)

    function request (response) {
      // Recursively follow potential redirects.
      if (response.statusCode === 302) {
        http.get(response.headers.location, request)
        return
      }

      // Handle successful response.
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filePath)
          .on('error', () => {
            reject(new Error('Could not write file to disk.'))
          })
          .on('finish', () => {
            writeStream.close()
            unzip()
          })

        response.pipe(writeStream)
        return
      }

      return reject(new Error(`Download error: ${response.statusCode}`))
    }

    function unzip () {
      yauzl.open(filePath, { lazyEntries: true }, (error, zip) => {
        if (error) throw error

        utils.logAction('Unzipping...\n')

        zip.on('entry', entry => isFolder(entry) ? zip.readEntry() : unzipEntry(zip, entry))
        zip.on('end', resolve)
        zip.readEntry()
      })
    }
  })
}

function unzipEntry (zip, entry) {
  zip.openReadStream(entry, (error, stream) => {
    if (error) throw error

    const fileFolder = path.resolve(utils.twineFolder, getFileDirectory(entry.fileName))
    shell.mkdir('-p', fileFolder)
    const filePath = path.resolve(utils.twineFolder, entry.fileName)
    const writeStream = fs.createWriteStream(filePath)

    stream.on('end', () => zip.readEntry())
    stream.pipe(writeStream)
  })
}

function getTweegoLink () {
  const platform = utils.links.tweego[process.platform]
  return platform[process.arch] || platform.x86
}

function isFolder (entry) {
  return /\/$/.test(entry.fileName)
}

function getFileDirectory (file) {
  return file.substring(0, file.lastIndexOf('/'))
}
