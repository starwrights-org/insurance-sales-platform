import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-white font-bold text-xl">InsurePro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-white/70 hover:text-white transition">登录</Link>
            <Link href="/demo" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              免费试用
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm mb-6">
            🚀 AI 驱动的保险销售赋能平台
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            让保险销售<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">更高效</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            为券商、银行、保险经纪公司打造的智能销售工具，<br />
            AI 产品推荐 + 一键方案生成 + 管理驾驶舱
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-xl transition text-lg">
              申请演示
            </Link>
            <Link href="/products" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition text-lg border border-white/20">
              了解功能
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '300%', label: '方案产出效率提升' },
            { value: '50%', label: '成本节省（配合BUD基金）' },
            { value: '20%+', label: '转化率提升' },
            { value: '5分钟', label: '生成专业建议书' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {stat.value}
              </div>
              <div className="text-white/60 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">核心功能</h2>
        <p className="text-white/60 text-center mb-12">全流程 AI 赋能，从获客到成交</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🎯',
              title: 'AI 产品推荐',
              desc: '根据客户需求智能匹配最优产品组合，支持多家保险公司横向对比',
              features: ['智能需求分析', '多维度对比', '自动高亮优势'],
            },
            {
              icon: '📄',
              title: '一键方案生成',
              desc: '5分钟生成专业 PDF 建议书，支持公司品牌定制',
              features: ['专业设计模板', '自动计算保费', '品牌 Logo 定制'],
            },
            {
              icon: '📊',
              title: '管理驾驶舱',
              desc: '实时掌握团队效率与订单转化，数据驱动决策',
              features: ['团队效率看板', '转化漏斗分析', 'ROI 报表'],
            },
            {
              icon: '💬',
              title: 'AI 话术助手',
              desc: '针对客户异议，AI 实时生成专业应对话术',
              features: ['异议处理', '产品讲解', '场景话术'],
            },
            {
              icon: '🧠',
              title: '智能知识库',
              desc: '港险知识随时问，AI 秒级响应',
              features: ['产品问答', '条款解读', '案例参考'],
            },
            {
              icon: '👥',
              title: '客户管理',
              desc: '完整客户档案，跟进状态一目了然',
              features: ['客户画像', '跟进提醒', '成交预测'],
            },
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 mb-4">{feature.desc}</p>
              <ul className="space-y-2">
                {feature.features.map((f, j) => (
                  <li key={j} className="text-white/40 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BUD Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl p-8 md:p-12 border border-green-500/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm mb-4">
                💰 政府资助
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                配合 BUD 基金，最高节省 50% 成本
              </h2>
              <p className="text-white/60 mb-6">
                我们的系统符合香港 BUD 专项基金「升级转型」资助范围。<br />
                企业采购可申请政府补贴，实际支出仅需一半。
              </p>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center mr-3 text-green-400">✓</span>
                  资助比例最高 50%
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center mr-3 text-green-400">✓</span>
                  每家企业累计上限 700 万港币
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-green-500/30 rounded-full flex items-center justify-center mr-3 text-green-400">✓</span>
                  我们协助准备申请材料
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="text-sm text-white/40 mb-2">采购成本对比</div>
              <div className="space-y-4">
                <div>
                  <div className="text-white/60 text-sm">原价</div>
                  <div className="text-2xl font-bold text-white/40 line-through">HKD 100,000</div>
                </div>
                <div>
                  <div className="text-green-400 text-sm">BUD 资助后</div>
                  <div className="text-3xl font-bold text-green-400">HKD 50,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">定价方案</h2>
        <p className="text-white/60 text-center mb-12">比竞品便宜 65%，效果更好</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: '基础版',
              price: '500',
              unit: '港币/人/年',
              features: ['AI 产品推荐', '保费计算器', '方案 PDF 生成', '基础客户管理'],
              highlight: false,
            },
            {
              name: '专业版',
              price: '800',
              unit: '港币/人/年',
              features: ['全部基础版功能', 'AI 话术助手', '智能知识库', '管理驾驶舱', '数据报表'],
              highlight: true,
            },
            {
              name: '企业版',
              price: '面议',
              unit: '',
              features: ['全部专业版功能', '定制化开发', 'API 对接', '专属客户经理', 'BUD 申请协助'],
              highlight: false,
            },
          ].map((plan, i) => (
            <div key={i} className={`rounded-2xl p-6 border ${plan.highlight ? 'bg-blue-500/20 border-blue-500' : 'bg-white/5 border-white/10'}`}>
              {plan.highlight && (
                <div className="text-blue-400 text-sm font-medium mb-2">最受欢迎</div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.unit && <span className="text-white/40 ml-2">{plan.unit}</span>}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="text-white/60 flex items-center">
                    <span className="text-blue-400 mr-2">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-medium transition ${plan.highlight ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                {plan.price === '面议' ? '联系我们' : '开始试用'}
              </button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-white/40 mt-8">
          对比竞品 2,288 港币/年，我们便宜 <span className="text-green-400 font-bold">65%+</span>
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备好提升团队效率了吗？</h2>
          <p className="text-white/80 mb-8">团队前 3 人免费试用 90 天，无需信用卡</p>
          <Link href="/demo" className="inline-block px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-white/90 transition text-lg">
            立即申请演示
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/40 text-sm">
          © 2026 InsurePro. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
