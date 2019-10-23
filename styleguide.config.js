const path = require('path');

module.exports = {
    // pagePerSection: true,
    // sections: [
    //     {
    //         name: 'Documentação',
    //         sections: [
    //             {
    //             name: 'AnterosCalendar',
    //             components:'./src/components/*.jsx',
    //             exampleMode: 'collapse',
    //             usageMode:'collapse'
    //             }
    //         ]
    //     }],
    theme:{
        color:{
            link:'white',
            //linkHover:'',
            sidebarBackground:'#052B47',
            //codeBackground: 'blue'
            //ribbonBackground: 'blue',
            //ribbonText: 'red',
            //codeProperty: 'blue'
            baseBackground: '#fff',
            
        },
        sidebarWidth:300,
    },
    styleguideComponents:{
        logoRenderer: path.join(__dirname, 'logo.js')
    }
}