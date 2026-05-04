import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/c-quick-start/',
  title: "C语言快速教程",
  description: "C语言学习教程，包含基础语法和数据结构",
  markdown: {
    breaks: true,
    html: false
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '基础语法', link: '/guide/基础语法/' },
      { text: '数据结构', link: '/guide/数据结构/' },
      { text: '博客', link: 'https://dingtongbin.cn' }
    ],

    sidebar: {
      '/guide/基础语法/': [
        {
          text: '基础语法',
          items: [
            { text: '第一章：C语言入门基础', link: '/guide/基础语法/第一章：C语言入门基础' },
            { text: '第二章：数据类型与变量', link: '/guide/基础语法/第二章：数据类型与变量' },
            { text: '第三章：运算符与表达式', link: '/guide/基础语法/第三章：运算符与表达式' },
            { text: '第四章：流程控制语句', link: '/guide/基础语法/第四章：流程控制语句' },
            { text: '第五章：数组与字符串', link: '/guide/基础语法/第五章：数组与字符串' },
            { text: '第六章：函数', link: '/guide/基础语法/第六章：函数' },
            { text: '第七章：指针基础', link: '/guide/基础语法/第七章：指针基础' },
            { text: '第八章：结构体与共用体', link: '/guide/基础语法/第八章：结构体与共用体' },
            { text: '第九章：预处理指令', link: '/guide/基础语法/第九章：预处理指令' },
            { text: '第十章：文件操作', link: '/guide/基础语法/第十章：文件操作' },
            { text: '第十一章：内存管理', link: '/guide/基础语法/第十一章：内存管理' },
            { text: '第十二章：综合实战项目', link: '/guide/基础语法/第十二章：综合实战项目' }
          ]
        }
      ],
      '/guide/数据结构/': [
        {
          text: '数据结构',
          items: [
            { text: '第1章 数据结构基础', link: '/guide/数据结构/第1章 数据结构基础' },
            { text: '第2章 线性表', link: '/guide/数据结构/第2章 线性表' },
            { text: '第3章 栈', link: '/guide/数据结构/第3章 栈' },
            { text: '第4章 队列', link: '/guide/数据结构/第4章 队列' },
            { text: '第5章 字符串', link: '/guide/数据结构/第5章 字符串' },
            { text: '第6章 树的基础', link: '/guide/数据结构/第6章 树的基础' },
            { text: '第7章 二叉树', link: '/guide/数据结构/第7章 二叉树' },
            { text: '第8章 二叉搜索树', link: '/guide/数据结构/第8章 二叉搜索树' },
            { text: '第9章 平衡二叉树', link: '/guide/数据结构/第9章 平衡二叉树' },
            { text: '第10章 图的基础', link: '/guide/数据结构/第10章 图的基础' },
            { text: '第11章 图的遍历', link: '/guide/数据结构/第11章 图的遍历' },
            { text: '第12章 图的经典算法', link: '/guide/数据结构/第12章 图的经典算法' },
            { text: '第13章 查找算法', link: '/guide/数据结构/第13章 查找算法' },
            { text: '第14章 哈希表', link: '/guide/数据结构/第14章 哈希表' },
            { text: '第15章 配许算法基础', link: '/guide/数据结构/第15章 配许算法基础' },
            { text: '第16章 简单排序', link: '/guide/数据结构/第16章 简单排序' },
            { text: '第17章 高效排序', link: '/guide/数据结构/第17章 高效排序' },
            { text: '第18章 特殊排序', link: '/guide/数据结构/第18章 特殊排序' },
            { text: '第19章 并查集', link: '/guide/数据结构/第19章 并查集' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dingtongbin/c-quick-start' }
    ]
  }
})
