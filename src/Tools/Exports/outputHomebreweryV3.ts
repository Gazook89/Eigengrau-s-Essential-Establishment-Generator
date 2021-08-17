import dedent from 'dedent-tabs'

export const outputHomebreweryV3 = () => {
  const output = setup.outputEverything() as Record<string, any>
  let string = addHomebreweryPreText()
  string += output.town
  string += addPage()
  string += `# Overview of the buildings in ${State.variables.town.name}`
  string += output.start
  string += addPage()
  const target = {
    buildings: 'buildings',
    factions: 'factions',
    NPCs: 'NPCs'
  }

  for (const type in target) {
    string += addHomebreweryPart(type)
    string += addPage()
    for (const page in output[type]) {
      string += `## ${output[type as string][page as string].name}\n${output[type][page].output}\n`
      string += addPage()
    }
    string += addPage()
  }
  string += addHomebreweryPostText()
  return string
}

function addHomebreweryPart (type: string) {
  const partIllustrations: Record<string, string> = {
    buildings: `
<img src='https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/img/hero/tavern-illustration.jpg?raw=true' class='cover-illustration'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png' class='watercolour'>
`,
    NPCs: `
    <img src='https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/img/hero/general-store-illustration.jpg?raw=true' class='cover-illustration'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png' class='watercolour'>
`,
    factions: `

<img src='https://cdnb.artstation.com/p/assets/images/images/019/755/997/large/juho-huttunen-bittervine-emissary.jpg?1564881662' class='cover-illustration' style="position:absolute; left:0; top:250px">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0008.png' class='watercolour'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour'>

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0008.png' class='watercolour' style="transform:rotate(180deg)">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour' style="transform:rotate(180deg)">

<img src='https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0005.png' class='watercolour' style="transform:rotate(180deg)">`
  }
  let result = dedent`
  {{partpage-dmg
  # ${type}
  `
  if (partIllustrations[type]) {
    result += partIllustrations[type]
  }
  result += `
  }}
  `
  return result
}

function addHomebreweryPostText () {
  return dedent`
    \\page

    <style>
      /** Change the p2 to whatever page number is the last page in your document **/
      .phb:last-child:after { display:none; }
    </style>

    {{back-cover-image
    }}

    {{margin-top:20px;
    }}

    {{back-cover-header
    Made Using

    Eigengrau's

    Generator
    }}

    {{back-cover-text
    ##### Made Using [A Generator Unlike Any Other](https://eigengrausgenerator.com)
    This (or parts of this document) was made using [Eigengrau's Generator](https://eeegen.com), an open source TTRPG generator developed by [Rhys Gray](http://rhysgraymusic.com).

    * Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")
    * [Original seed used](https://eeegen.com/#healthyimpishhairstreak "Original source")
    * [Patreon](https://www.patreon.com/join/eigengrausgenerator?)
    * [Discord](https://discord.gg/4wYNwp2)
    * [GitHub](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/t)
    }}

    {{back-cover-diamond,top:679px
    }}

    {{margin-top:35px
    }}

    {{back-cover-close
    You're probably going to want to delete either this side or the following, which is in the right hand column so you can credit the other people that helped you make this. That's alright- but please do credit us!
    }}

    {{back-cover-logo-link
    [EIGENGRAUSGENERATOR.COM](https://eigengrausgenerator.com)
    }}

    \\column

    {{back-cover-right
    ##### Made Using [Eigengrau's Generator](https://eigengrausgenerator.com)
    This (or parts of this document) was made using [Eigengrau's Generator](https://eeegen.com), an open source TTRPG generator developed by [Rhys Gray](http://rhysgraymusic.com).
    * Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")
    * Watercolour stains by [/u/flamableconcrete](https://watercolors.giantsoup.com/)
    * [Original seed used](https://eeegen.com/${location.hash} "Original source")
    * [Patreon](https://www.patreon.com/join/eigengrausgenerator?)
    * [Discord](https://discord.gg/4wYNwp2)
    * [GitHub](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/t)
    }}
    `
}

function addHomebreweryPreText () {
  return dedent`
    <style>  /* test1 */

    .cover-illustration {
          width: 100%;
          position: relative;
          left: 0;
          right: 0;
          bottom: -65px;
      }

    .watercolour {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 816px;
          transform: rotate(180deg);
      }
    </style>


    # The ${State.variables.town.type} of ${State.variables.town.name}

    {{wide

    ##### Created using [Eigengrau's Generator](https://eigengrausgenerator.com)

    ###### Developed by [Rhys Gray](http://rhysgraymusic.com)

    ###### Adapted for Homebrewery Version 3 by Gazook89

    Artwork by [Juho Huttunen](https://www.artstation.com/northernhermit "Juho takes commissions! I can recommend him highly.")

    ![cover image](https://github.com/ryceg/Eigengrau-s-Essential-Establishment-Generator/blob/master/src/Resources/img/hero/town-illustration.jpg?raw=true) {cover-illustration,position:absolute;bottom:170px;left:0px}

    ![watercolor mask](https://watercolors.giantsoup.com/dmg/dmg_center-horizontal/0004.png) {watercolour,transform:rotate(0deg)}

    }}

    ${addPage()}`
}

function addPage () {
  return '\n{{pageNumber,auto}}\n{{footnote PART 1 | SECTION NAME}}\n\\page\n\n'
}

// function addColumnBreak () {
//   return '\n\n\\columnbreak\n\n'
// }

// function addBreaks (text) {
//   const tokenizer = new RegExp('\\S+(?:\\s+|$)', 'g')
//   State.temporary.countColumns = 0
//   let match = null
//   let newText = ''
//   let lastBrokenIndex = 0
//   while (match = tokenizer.exec(text)) {
//     if (match.index - lastBrokenIndex > 1780) {
//       newText += pageOrColumnBreak()
//       lastBrokenIndex = match.index
//     }
//     newText += match[0]
//   }
//   return newText
// }

// /**
//  * Discriminates between adding a page or column break.
//  * @returns {string}
//  */
// function pageOrColumnBreak () {
//   State.temporary.countColumns++
//   if (State.temporary.countColumns % 2 === 0) return addPage()
//   return addColumnBreak()
// }
