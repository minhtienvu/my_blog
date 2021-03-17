module.exports = {
  "title": "Tien Nahut",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/header_logo.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
    //   // appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
    //   // appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
    //   // placeholder: '填写邮箱可以收到回复提醒哦！',
    //   // verify: true, // 验证码服务
    //   // // notify: true, // 
    //   // recordIP: true,
    //   // showComment: false

      appId: 'XDwlSXS2pD137bPrPpwQaqqD-gzGzoHsz',// your appId
      appKey: 'CQ8FKrMUP76LwycPcKlDoRqV', // your appKey
      placeholder: 'Hãy để nhận xét của bạn tại đây',
      avatar: 'wavatar',
      lang: 'en',
      // verify: true, // 验证码服务
      notify: true, // 
      // recordIP: true,
      // showComment: false
      // serverUrl: 'https://leanserver.smallsunnyfox.com'
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/minhtienvu",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      },
      socialLinks: [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/minhtienvu' },
        { icon: 'reco-linkedin', link: 'https://www.linkedin.com/in/vu-minh-tien-a05a091a8/' },
        { icon: 'reco-facebook', link: 'https://www.facebook.com/tiennahut2210/' },
        { icon: 'reco-google-gmail', link: 'minhtienvu2210@gmail.com' },
        { icon: 'reco-instagram', link: 'https://www.instagram.com/_nahut_' },
        { icon: 'reco-skype', link: 'https://join.skype.com/invite/xlWubAv1OJzr' },
      ]
    },
    "friendLink": [
      {
        "title": "hoangpn",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "hoangpn@gmail.com",
        "link": "https://hoangpn.com/"
      }
    ],
    "logo": "/avatar_chibi.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "TienVM",
    "authorAvatar": "/chill.jpg",
    "record": "",
    "startYear": "2021"
  },
  // End ThemeConfig

  "markdown": {
    "lineNumbers": true
  }
}