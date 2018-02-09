const shapeText = {
  type1: "This means that they have spent a long time in your intestine and colon, making them tough to get out. This represents signs of severe constipation, which is a condition in which there is difficulty in emptying the bowels. This form can be very painful if it isn't already and there are different solutions based on the problem. If this is happening frequently--and you aren't suffering from another illness that comes from funky bowels, you may have gastrointestial conditions. Drinking more water, slowly adding more fiber to your diet and exercising may help. Of course if symptoms appear consistantly, please consult the doctor. Generally they'll just push on your stomach for examination, so don't worry--you most likely will not get a finger up your bum.",
  type2: "This is a combination of Type 1 stool (seprated hard lumps) impacted into a single mass and lumped together. This represents signs of mild constipation, which is a condition in which there is difficulty in emptying the bowels. This form of stool tends to be the most excruciating because the size is near or exceeds the maximum opening if the anal canal causing extreme straining during passing-ouch! So your stool has been piling up inside your colon for long period of time. Please consult your doctor if this is happening constantly, there could be signs of irritable bowel due to preassure of large stools which is not good for your intestines. Drink water, get your body moving (excerise) and slowly adding fiber to your diet--prevent from using supplimental fiber.",
  type3: "If this is what you are seeing when you pass your stool, good work! Doctors think this kind of poop is normal, because it's soft and east to pass but your not off the hook yet. Even though this is considered healthy, those cracks, however do indicate that your may be a little dehydrated, so drinking more water than what your currently doing will put you in tip-top shape. Though this is just an approvement, dont worry--if your pooping these stool on every visit to the toilet, you are doing something right. ☺️ 👍",
  type4: "The pros consider this type of stool to be golden, you are a champ. 💪 👊 Most likely you have been visiting the toilet on a daily basis, so give your self a pat on the back. The size will usually be 1 to 2cm but don't pick it up--unless you know what your doing. If it has a larger diameter it probably means that you are taking large amount of dietary fiber in your diet. Either than that, its a clear sign you're diet is great and you're staying nice and hydrated.\n\nPlease note--bowel movement is dependant on the person, some people have bowel movements 2-3 times due to fast metabolism, more robust good bacteria or quality of food they eat. Some poo every other day. If this is normal pattern to you and your stool is soft and comfortable, no need to stres--you are still a champ!",
  type5: "These are comfortable and easy to pass, but you may feel sense of urgency about getting to the bathroom, indicating signs of mild diarrhea--nothing to be worried about. This will usually go away on its own with little stress. However this form is can be considered ideal, It is typical for a person who has stools twice or three times daily and main meals.",
  type6: "If you are having this stool, it may be difficult to control the urge to visit the toilet, especially when you don't have immediate access. It can get messy to manage the toilet paper unless you have a flexible shower of bidet. This means that your waste is passing through your colon quickly, or sudden dehydration or spike in blook pressure related to stress, all resulting in the following texture. This form also indicates inflammation of the bowel or an inflammatory bowel disease. Please consult your doctor for any concerns even if the conversation is awkward for you--your health is always a priority.",
  type7: "This is definately a case of diarrhea, which occurs due to intestines being irritated. There are a number is causes for this type of stool, including viruses, bacteria, digestive disorders, lactose intolerance or starting a new medication. The cause of your diarrhea can be determined by you. Personally, I first think about what I've eat first then move from there. There is different forms of diarrhea but it will not be covered here. If your diarrhea lasts more that two days you may also have signs of dehydration (dry mouth, sleepiness, headache or dizzindess), severe tummy pain, rear end pain or a fever. Please contact your doctor, your health is number one priority.",
}
const colorText = {
  brown: "Poop is normally brown. The color is the result of what you eat and how much bile is in your stool. Bile is a fluid your liver makes to digest fats. It starts out as a yellow-ish green color. But as the pigment that gives bile it's color travel through your digestive system, they fo through chemical changes to turn brown. So if your stool is brown, you have no obvious reason for concerns--very nice! ",
  green: "Can be quite disturbing to see green poop, but green poop is completely normal. The most likely cause of green poop is the result of eaiting leafy greens, just like lettuce and spinach--that's very healthy of you 👌 . Maybe you just ate something with green food coloring, such as a colored drink or green icy poles. Though, another reason would be that your body digestion didn't go quite well as it's passing through your system quickly and didn't absorb that bile your liver makes. Overall, your pretty much in the normal.",
  red: "Don't be initally alarmed, this might be from eating too much red good coloring, maybe red-colored medicine or tomato soup, so think back if you ate anything colored. Maybe you might've just 'pushed too hard,' which can sometimes lead to a small tears in the lining of your anal canal--so slow down if your pushing that hard. If these are not the case for you, it could be a clear sign of bleeding, a serious matter. Common causes include: Noncancerious tumors, cancer, inflammation in the colon, growths in colon, hemorrhoids or disease. Generally, if you didn't eat any food related to the color red--go see your doctor! Always better to play safe.",
  light: "Light/greyish or pale color indcates that there is a lack of bile in your stool. This is directly in relation to your liver, there could be a blockage in your drainage system since your liver is the source of bile. On the other hand, a shade of yellow can be normal for many people, its common for babies who brestfeed but if you have yellow, greasy, smelly stool, its an indication that your body isn't absorbing fats well. Chances include medical problems and malabsorption disorder like celiac desease. If you have any of these conditions, please consult your doctor.",
  dark: "Seeing Black huh? Quickly think about what foods you've eaten and medications you've taken recently. If you had anything with black food (e.g. oreos and licorice), black dyed food or took an iron suppliment, don't panic, it's just temporary color and will phase out. In the other case, take note of the smell and texture--if it's smells different with a liquid texture, this indicates signs of internal bleeding in the gastrointestinal system. The reason it is black is because the blood is older and therefore travels down the intestinal tract. You need to consult your doctor immediately, this is concerning.",
}
const titles = {
  okay: "you're okay",
  golden: "you're golden!",
  danger: "uh ho...",
  okayBut: "you're okay, but...",
}
const titleColors = {
  gold: "#ffd700",
  green: "#97db62",
  yellow: "#e7e247",
  red: "#d84820",
}
const resultsData = {
  type1: {
    brown: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type1,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type1_stool.svg"),
      shapeImageAlt: "Type 1 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type1,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type1_stool.svg"),
      shapeImageAlt: "Type 1 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type1,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type1_stool.svg"),
      shapeImageAlt: "Type 1 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type1,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type1_stool.svg"),
      shapeImageAlt: "Type 1 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type1,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type1_stool.svg"),
      shapeImageAlt: "Type 1 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type2: {
    brown: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type2,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type2_stool.svg"),
      shapeImageAlt: "Type 2 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type2,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type2_stool.svg"),
      shapeImageAlt: "Type 2 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type2,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type2_stool.svg"),
      shapeImageAlt: "Type 2 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type2,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type2_stool.svg"),
      shapeImageAlt: "Type 2 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type2,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type2_stool.svg"),
      shapeImageAlt: "Type 2 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type3: {
    brown: {
      title: titles.okay,
      titleColor: titleColors.green,
      shapeText: shapeText.type3,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type3_stool.svg"),
      shapeImageAlt: "Type 3 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okay,
      titleColor: titleColors.green,
      shapeText: shapeText.type3,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type3_stool.svg"),
      shapeImageAlt: "Type 3 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type3,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type3_stool.svg"),
      shapeImageAlt: "Type 3 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type3,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type3_stool.svg"),
      shapeImageAlt: "Type 3 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type3,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type3_stool.svg"),
      shapeImageAlt: "Type 3 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type4: {
    brown: {
      title: titles.golden,
      titleColor: titleColors.gold,
      shapeText: shapeText.type4,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type4_stool.svg"),
      shapeImageAlt: "Type 4 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.golden,
      titleColor: titleColors.gold,
      shapeText: shapeText.type4,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type4_stool.svg"),
      shapeImageAlt: "Type 4 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type4,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type4_stool.svg"),
      shapeImageAlt: "Type 4 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type4,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type4_stool.svg"),
      shapeImageAlt: "Type 4 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type4,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type4_stool.svg"),
      shapeImageAlt: "Type 4 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type5: {
    brown: {
      title: titles.okay,
      titleColor: titleColors.green,
      shapeText: shapeText.type5,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type5_stool.svg"),
      shapeImageAlt: "Type 5 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okay,
      titleColor: titleColors.green,
      shapeText: shapeText.type5,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type5_stool.svg"),
      shapeImageAlt: "Type 5 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type5,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type5_stool.svg"),
      shapeImageAlt: "Type 5 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type5,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type5_stool.svg"),
      shapeImageAlt: "Type 5 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type5,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type5_stool.svg"),
      shapeImageAlt: "Type 5 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type6: {
    brown: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type6,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type6_stool.svg"),
      shapeImageAlt: "Type 6 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type6,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type6_stool.svg"),
      shapeImageAlt: "Type 6 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type6,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type6_stool.svg"),
      shapeImageAlt: "Type 6 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type6,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type6_stool.svg"),
      shapeImageAlt: "Type 6 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type6,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type6_stool.svg"),
      shapeImageAlt: "Type 6 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
  type7: {
    brown: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type7,
      colorText: colorText.brown,
      shapeImagePath: require("../assests/shapes/type7_stool.svg"),
      shapeImageAlt: "Type 7 stool",
      colorImagePath: require("../assests/colors/stool_brown.svg"),
      colorImageAlt: "Brown colored stool"
    },
    green: {
      title: titles.okayBut,
      titleColor: titleColors.yellow,
      shapeText: shapeText.type7,
      colorText: colorText.green,
      shapeImagePath: require("../assests/shapes/type7_stool.svg"),
      shapeImageAlt: "Type 7 stool",
      colorImagePath: require("../assests/colors/stool_green.svg"),
      colorImageAlt: "Green colored stool"
    },
    red: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type7,
      colorText: colorText.red,
      shapeImagePath: require("../assests/shapes/type7_stool.svg"),
      shapeImageAlt: "Type 7 stool",
      colorImagePath: require("../assests/colors/stool_red.svg"),
      colorImageAlt: "Red colored stool"
    },
    light: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type7,
      colorText: colorText.light,
      shapeImagePath: require("../assests/shapes/type7_stool.svg"),
      shapeImageAlt: "Type 7 stool",
      colorImagePath: require("../assests/colors/stool_light.svg"),
      colorImageAlt: "Light colored stool"
    },
    dark: {
      title: titles.danger,
      titleColor: titleColors.red,
      shapeText: shapeText.type7,
      colorText: colorText.dark,
      shapeImagePath: require("../assests/shapes/type7_stool.svg"),
      shapeImageAlt: "Type 7 stool",
      colorImagePath: require("../assests/colors/stool_dark.svg"),
      colorImageAlt: "Dark colored stool"
    },
  },
}
export const otherText = {
  smellyPoo: "If you noticed that your poo is more smelly than usual, there is chance that you could be constipated and your stool has stayed inside longer that usual. While it stays inside your system, more natural gasses are produced and bacteria in your colon is 'fermenting.' Slowly adding more fiber to your diet and staying hydrated is recomended. In particular, if you came from international travels and your poo smells terrible, please consult your doctor, possible symptoms of parastic, viral, or bacterial infection.",
  howOften: "So how often should you poo? Well... you should have at least one bowel movement per day but making sure your bowels feel empty and not partially. However, this make vary, some people have more that one bowel movement per day due to faster matabolism, larger diet, more fiber or higher bacterial count. More that 3 bowel movements per day usually means you have diarrhoea. Some doctors claim that it is normal to have three bowel movements per week, even one per week. In conclusion, it varies from person to person but having atleast one bowel movement per day is recommended."
}

export default resultsData;