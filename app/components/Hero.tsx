"use client"

import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown, Github, Home, BookOpen, FileText, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Tooltip } from 'react-tooltip'

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

// 在顶部新增样式引入
import 'react-tooltip/dist/react-tooltip.css'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-neutral-50 via-red-50 to-neutral-100 dark:from-gray-900 dark:via-red-950 dark:to-gray-900"
    >
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 dark:bg-gradient-to-r from-red-800 via-red-600 to-red-900 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900 dark:from-red-500 dark:to-red-700">
              <span style={{ fontFamily: 'Times New Roman' }}>Zhang Jinhua</span>{' '}
              <span style={{ fontFamily: 'SimSun' }}>(张进华)</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Full Stack/Java Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Proficient in Full Stack,Cloud Computing Services &DevOps skills. Experienced in the software development full life cycle.
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              A fast learner with Open-minded and passionate about exploring new technologies(e.g. Machine Learning&Generative AI)
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              {/* GitHub 链接 */}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="GitHub"
                href="https://github.com/myli0724"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>

              {/* LinkedIn 链接 */}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="LinkedIn"
                href="https://www.linkedin.com/in/%E8%BF%9B%E5%8D%8E-%E5%BC%A0-69896b286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>

              {/* 邮箱链接 */}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Email"
                href="mailto:aixcat@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>

              {/* 个人主页链接 */}
              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Wechat Moments"
                href="https://me.aixcat.top"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Personal Website"
              >
                <svg width="24px" height="24px" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#3f413e" d="M300 255c0 24.854-20.147 45-45 45H45c-24.854 0-45-20.146-45-45V45C0 20.147 20.147 0 45 0h210c24.853 0 45 20.147 45 45v210z"></path> <g fill="#FFF"> <path d="M200.803 111.88c-24.213 1.265-45.268 8.605-62.362 25.188-17.271 16.754-25.155 37.284-23 62.734-9.464-1.172-18.084-2.462-26.753-3.192-2.994-.252-6.547.106-9.083 1.537-8.418 4.75-16.488 10.113-26.053 16.092 1.755-7.938 2.891-14.889 4.902-21.575 1.479-4.914.794-7.649-3.733-10.849-29.066-20.521-41.318-51.232-32.149-82.85 8.483-29.25 29.315-46.989 57.621-56.236 38.635-12.62 82.054.253 105.547 30.927 8.485 11.08 13.688 23.516 15.063 38.224zm-111.437-9.852c.223-5.783-4.788-10.993-10.74-11.167-6.094-.179-11.106 4.478-11.284 10.483-.18 6.086 4.475 10.963 10.613 11.119 6.085.154 11.186-4.509 11.411-10.435zm58.141-11.171c-5.974.11-11.022 5.198-10.916 11.004.109 6.018 5.061 10.726 11.204 10.652 6.159-.074 10.83-4.832 10.772-10.977-.051-6.032-4.981-10.79-11.06-10.679z"></path> <path d="M255.201 262.83c-7.667-3.414-14.7-8.536-22.188-9.318-7.459-.779-15.3 3.524-23.104 4.322-23.771 2.432-45.067-4.193-62.627-20.432-33.397-30.89-28.625-78.254 10.014-103.568 34.341-22.498 84.704-14.998 108.916 16.219 21.129 27.24 18.646 63.4-7.148 86.284-7.464 6.623-10.15 12.073-5.361 20.804.884 1.612.985 3.653 1.498 5.689zm-87.274-84.499c4.881.005 8.9-3.815 9.085-8.636.195-5.104-3.91-9.385-9.021-9.406-5.06-.023-9.299 4.318-9.123 9.346.166 4.804 4.213 8.69 9.059 8.696zm56.261-18.022c-4.736-.033-8.76 3.844-8.953 8.629-.205 5.117 3.772 9.319 8.836 9.332 4.898.016 8.768-3.688 8.946-8.562.19-5.129-3.789-9.364-8.829-9.399z"></path> </g> </g></svg>              </a>

              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Twitter (X)"
                href="https://x.com/miaolegemiha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Personal Website"
              >
                <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>

              <a
                data-tooltip-id="tooltip"
                data-tooltip-content="Blog"
                href="https://blog.aixcat.top"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Blog"
              >
                <BookOpen className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() => window.open('https://pic.aixcat.top/file/1742632006523_ZhangJinhua-GZHU-EN&CH-13423538865.pdf', '_blank')} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-900 text-white rounded-full hover:from-red-700 [animation:pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:to-red-950 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <FileText className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              className="w-full h-full"
              modules={[EffectCards]}
              effect={'cards'}
              grabCursor={true}
              slidesPerView={'auto'}
              initialSlide={0}
              centeredSlides={true}
            >
              {[1, 2, 3].map((item) => (
                <SwiperSlide
                  key={item}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <Image
                    src={`https://placehold.co/640x360/ffeded/ff6060.png?text=Project+${item}`}
                    alt={`Project ${item}`}
                    width={640}
                    height={360}
                    className="object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">项目案例 {item}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      点击滑动查看详细案例展示
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}

      {/* 在组件内部添加Tooltip */}
      <Tooltip
        id="tooltip"
        className="!bg-gray-800 !text-white dark:!bg-gray-200 dark:!text-gray-800 !px-3 !py-2 !rounded-lg !text-sm"
        place="top"
      />

      {/* 装饰元素 */}
      <motion.div
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-red-600 dark:text-red-400 cursor-pointer hover:opacity-80 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Load More</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  )
}

