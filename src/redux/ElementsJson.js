const elementsArr=[
    {
        id: 'water',
        name:{en:'water',ar:'ماء'},
        ingredients:[]
    },
    {
        id: 'soil',
        name:{en:'soil',ar:'تراب'},
        ingredients:[]
    },
    {
        id: 'air',
        name:{en:'air',ar:'هواء'},
        ingredients:[]
    },
    {
        id: 'fire',
        name:{en:'fire',ar:'نار'},
        ingredients:[]
    },
    {
        id: 'plant',
        name:{en:'plant',ar:'نبات'},
        ingredients:['water','soil']
    },
    {
        id: 'lake',
        name:{en:'lake',ar:'بحيرة'},
        ingredients:['water','water']
    },
    {
        id: 'wind',
        name:{en:'wind',ar:'رياح'},
        ingredients:['air','air']
    },
    {
        id: 'stone',
        name:{en:'stone',ar:'حجر'},
        ingredients:['soil','soil']
    },
    {
        id: 'cloud',
        name:{en:'cloud',ar:'غيوم'},
        ingredients:['air','water']
    },
    {
        id: 'steam',
        name:{en:'steam',ar:'بخار'},
        ingredients:['water','fire']
    },
    {
        id: 'heat',
        name:{en:'heat',ar:'حرارة'},
        ingredients:['air','fire']
    },
    {
        id: 'lava',
        name:{en:'lava',ar:'حمم'},
        ingredients:['soil','fire']
    },
    {
        id: 'ocean',
        name:{en:'ocean',ar:'محيط'},
        ingredients:['water','water','water']
    },
    {
        id: 'sky',
        name:{en:'sky',ar:'السماء'},
        ingredients:['air','air','air']
    },
    {
        id: 'gravity',
        name:{en:'gravity',ar:'الجاذبية'},
        ingredients:['soil','soil','soil']
    },
    {
        id: 'spark',
        name:{en:'spark',ar:'شرارة'},
        ingredients:['stone','stone']
    },
    {
        id: 'sun',
        name:{en:'sun',ar:'الشمس'},
        ingredients:['fire','sky']
    },
    {
        id: 'horizon',
        name:{en:'horizon',ar:'الأفق'},
        ingredients:['sky','soil']
    },
    {
        id: 'rain',
        name:{en:'rain',ar:'مطر'},
        ingredients:['cloud','water']
    },
    {
        id: 'rainbow',
        name:{en:'rainbow',ar:'قوس قزح'},
        ingredients:['rain','sun']
    },
    {
        id: 'obsidian',
        name:{en:'obsidian',ar:'سبج'},
        ingredients:['lava','water']
    },
    {
        id: 'tree',
        name:{en:'tree',ar:'شجرة'},
        ingredients:['plant','plant']
    },
]
export default elementsArr;