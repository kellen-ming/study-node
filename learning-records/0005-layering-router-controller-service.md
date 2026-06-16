# 完成 Lesson 0008：正确实现 router / controller / service 分层

学习者独立搭出 `src/{routes,controllers,services}/links.*` 三层：
- router 只「接线」（路径+方法 → controller），零逻辑、零 req/res ✓
- controller「取 req → 调 service → 包响应」，正确用 201（创建）/ 404 / 200 ✓
- service 用 `Map` 做内存存储，**无 `import express`、无 req/res** ✓ —— 分层与关注点分离理解到位

**澄清的点（Evidence + 易错点）**：
1. GET 返 200、POST 返 201；学习者一度以为 GET 也该返回 201（其实他的 GET 返 200 是对的）。
2. 纯 `curl` 只显示 body，看状态码要 `curl -i`（呼应 0003）；结尾的 `%` 是 zsh 的「无换行」标记，无害。
3. 「service」是**分层架构/DDD 里「业务能力层」**之意，非「网络服务」——学习者对命名有疑问，已用「餐厅后厨」比喻解释清楚。

**小遗留**：controller 的 `create` 尚未用 0007 的 zod 校验 `url`（可后续补，属 controller 职责）。

**Implications**：分层 + 关注点分离已掌握，可继续 0009（配置/日志）→ 0010（TypeScript）。相关：[[MISSION.md]]
