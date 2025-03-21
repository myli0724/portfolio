export type ProjectPreview = {
  images: {
    url: string
    description: string
    aspectRatio: string
  }[]
}

export const projectPreviews: Record<string, ProjectPreview> = {
  "BiteBook SaaS System": {
    images: [
      {
        url: "https://placehold.co/800x600",
        description: "预订管理界面 - 支持拖拽排序的订单队列",
        aspectRatio: "4:3"
      },
      {
        url: "https://placehold.co/800x450",
        description: "数据分析仪表板 - 实时营收和预订统计",
        aspectRatio: "16:9"
      },
      {
        url: "https://placehold.co/800x800",
        description: "移动端预订界面 - 支持扫码点单",
        aspectRatio: "1:1"
      }
    ]
  },
  "Junemamax AI Education SaaS Platform": {
    images: [
      {
        url: "https://placehold.co/800x450",
        description: "AI助手对话界面 - 支持多模态输入",
        aspectRatio: "16:9"
      },
      {
        url: "https://placehold.co/800x600",
        description: "CRM管理系统 - 客户画像和跟进记录",
        aspectRatio: "4:3"
      },
      {
        url: "https://placehold.co/800x800",
        description: "SOP流程编辑器 - 可视化流程设计",
        aspectRatio: "1:1"
      }
    ]
  },
  "Distributed Data Web Scraping System": {
    images: [
      {
        url: "https://placehold.co/800x450",
        description: "分布式爬虫监控面板",
        aspectRatio: "16:9"
      },
      {
        url: "https://placehold.co/800x600",
        description: "数据清洗和去重流程图",
        aspectRatio: "4:3"
      },
      {
        url: "https://placehold.co/800x800",
        description: "实时数据采集状态展示",
        aspectRatio: "1:1"
      }
    ]
  },
  "✨Aixcat: a SaaS chatbot Platform Based on AIGC": {
    images: [
      {
        url: "https://placehold.co/800x450",
        description: "AI对话界面 - 支持Markdown和LaTeX渲染",
        aspectRatio: "16:9"
      },
      {
        url: "https://placehold.co/800x600",
        description: "知识库管理系统 - 支持文档处理和向量检索",
        aspectRatio: "4:3"
      },
      {
        url: "https://placehold.co/800x800",
        description: "模型训练和部署控制台",
        aspectRatio: "1:1"
      }
    ]
  }
}