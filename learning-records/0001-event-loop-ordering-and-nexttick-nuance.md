# 完成 Lesson 0001 基础，正在厘清 nextTick 的「安排 ≠ 打印」细节

学习者已独立创建并运行 `00-warmup/event-loop-demo.js`，能编辑/运行 node 脚本（**环境就绪**），并主动改写代码尝试了挑战题——说明已掌握 Lesson 0001 的基础排序模型（**同步 → 微任务 → 宏任务**）。

关键易错点已厘清：`process.nextTick(() => Promise.resolve().then(() => log('666')))` 输出 `A E C 666 B`。曾经的混淆是「nextTick 最先执行」≈「它安排的 666 最先打印」。

**Evidence（已用主动回忆验证）**：学习者不看课件，自己口述了完整链路——「同步先输出 A E；调用栈置空后执行 nextTick 队列，nextTick 又推一个新微任务到微任务队列；再执行微任务队列先 C 后 666；清空后执行宏任务得 B」。准确抓住了「nextTick 回调只是*安排*了一个新的 Promise 微任务、排在更早注册的 cb_C 之后」这一核心。唯一小瑕疵：把 line3(Promise→微任务) 与 line4(nextTick→nextTick队列) 的入队顺序口述反了，已当场纠正；不影响其对「先入队先执行」的正确理解。

**Implications**：事件循环基础（含 nextTick 细节）已掌握，**Lesson 0003（原生 `http` 服务器）已解锁**。可放心进入「动手写后端」阶段。相关：[[MISSION.md]]。
