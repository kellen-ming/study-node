# Node.js 后端开发 Resources

> 原则：优先**官方文档与公认权威**，绝不轻信 AI 脑内知识。每条都标注「何时用」。

## Knowledge

### 核心 / 官方
- [Node.js 官方学习中心 — Learn Node.js](https://nodejs.org/learn)
  官方教程，覆盖入门、异步、模块、诊断。**何时用**：任何 Node 核心机制的第一手依据。
- [Node.js 官方 — The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick)
  事件循环、定时器、nextTick 的官方解释。**何时用**：搞清异步执行顺序、setTimeout/setImmediate/nextTick 区别。
- [Node.js 官方 — About Node.js®](https://nodejs.org/en/about)
  对「Node 是什么、单线程非阻塞」的权威定义。**何时用**：建立运行时心智模型。
- [Node.js API 文档](https://nodejs.org/api/)
  内置模块（fs, http, stream, events…）的权威参考。**何时用**：查内置模块用法与签名。

### JavaScript / 异步底层
- [MDN — JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model)
  执行模型、调用栈、任务/微任务。**何时用**：理解事件循环背后的 JS 机制。
- [MDN — In depth: Microtasks and the JavaScript runtime environment](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
  微任务深入。**何时用**：搞懂 Promise.then 为何先于 setTimeout。
- [javascript.info — Event loop: microtasks and macrotasks](https://javascript.info/event-loop)
  极高质量的图文讲解。**何时用**：需要直观、循序渐进的事件循环解释。

### 设计模式 / 进阶
- [书：Node.js Design Patterns (3rd Ed.) — Mario Casciaro & Luciano Mammino](https://nodejsdesignpatterns.com/)
  Node + 设计模式的权威书，几乎为本 mission 量身定做。**何时用**：阶段 4 设计模式、架构组织。
- [TypeScript 官方手册 — The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  TS 权威文档。**何时用**：贯穿全程、由浅入深学 TS。

## Wisdom (Communities)
- [r/node](https://www.reddit.com/r/node/)
  高信噪比的 Node 社区。**何时用**：架构选型讨论、踩坑求助。
- [Node.js 官方社区入口](https://nodejs.org/en/about)
  官方社区与协作渠道。**何时用**：深度交流、关注版本与最佳实践。

## Gaps（待补的资源缺口，驱动后续搜索）
- 数据库设计与 SQL 的权威入门资源（阶段 3 前补）
- Docker / 部署运维的高质量教程（阶段 7 前补）
- Stripe 订阅集成的官方文档（阶段 8 前补）
- 优质**中文社区** / 独立开发者社区（待确认你的偏好后补）
