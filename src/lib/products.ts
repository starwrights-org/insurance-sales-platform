import { InsuranceProduct } from './types';

// 示例产品数据 - 后续从数据库加载
export const SAMPLE_PRODUCTS: InsuranceProduct[] = [
  // 友邦保险
  {
    id: 'aia-vitalitylife',
    company: '友邦保险',
    name: '「裕满人生」储蓄计划',
    nameEn: 'AIA Vitality Life',
    type: 'savings',
    currency: 'USD',
    minPremium: 2000,
    features: [
      '保证现金价值',
      '非保证红利',
      '灵活提取',
      '身故赔偿',
    ],
    highlights: [
      '预期 IRR 约 6-7%',
      '供款期 5/10/15 年可选',
      '多种货币选择',
    ],
    commission: 0.5,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  {
    id: 'aia-premier',
    company: '友邦保险',
    name: '「至尊医疗计划」',
    nameEn: 'AIA Premier Medical Plan',
    type: 'medical',
    currency: 'HKD',
    minPremium: 5000,
    features: [
      '全球保障',
      '住院及手术',
      '癌症治疗',
      '终身续保',
    ],
    highlights: [
      '每年保障额高达 HKD 3,000 万',
      '涵盖先进医疗技术',
      '免费体检',
    ],
    commission: 0.25,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  // 保诚保险
  {
    id: 'pru-goal',
    company: '保诚保险',
    name: '「隽升」储蓄保障计划',
    nameEn: 'Prudential Goal',
    type: 'savings',
    currency: 'USD',
    minPremium: 2500,
    features: [
      '保证现金价值',
      '复归红利',
      '终期红利',
      '身故赔偿',
    ],
    highlights: [
      '预期 IRR 约 6.5%',
      '供款期灵活',
      '红利锁定功能',
    ],
    commission: 0.55,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  {
    id: 'pru-ci',
    company: '保诚保险',
    name: '「危疾加护保」',
    nameEn: 'Prudential CritiCare',
    type: 'critical_illness',
    currency: 'HKD',
    minPremium: 3000,
    features: [
      '涵盖 115 种疾病',
      '多次赔付',
      '早期危疾保障',
      '保费豁免',
    ],
    highlights: [
      '最高 7 次危疾赔付',
      '癌症持续保障',
      '保障至 100 岁',
    ],
    commission: 0.35,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  // 安盛保险
  {
    id: 'axa-wealth',
    company: '安盛保险',
    name: '「安进储蓄」计划',
    nameEn: 'AXA Wealth Advance',
    type: 'savings',
    currency: 'USD',
    minPremium: 3000,
    features: [
      '保证回报',
      '非保证红利',
      '灵活提取',
      '转换货币',
    ],
    highlights: [
      '预期 IRR 约 5.5-6%',
      '多种供款期',
      '传承规划',
    ],
    commission: 0.48,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  // 宏利保险
  {
    id: 'manulife-goal',
    company: '宏利保险',
    name: '「目标创富」储蓄计划',
    nameEn: 'Manulife Goal',
    type: 'savings',
    currency: 'USD',
    minPremium: 2000,
    features: [
      '保证现金价值',
      '非保证红利',
      '身故赔偿',
      '保单贷款',
    ],
    highlights: [
      '预期 IRR 约 6%',
      '红利实现率高',
      '灵活供款期',
    ],
    commission: 0.52,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
  // 富通保险
  {
    id: 'ftlife-regent',
    company: '富通保险',
    name: '「盛世传家宝」',
    nameEn: 'FTLife Regent',
    type: 'savings',
    currency: 'USD',
    minPremium: 5000,
    features: [
      '高保证成分',
      '复归红利',
      '终期红利',
      '无限次转换保单持有人',
    ],
    highlights: [
      '预期 IRR 约 7%',
      '保证 IRR 约 2%',
      '传承规划首选',
    ],
    commission: 0.6,
    createdAt: '2026-01-01',
    updatedAt: '2026-03-01',
  },
];

// 根据条件筛选产品
export function filterProducts(params: {
  type?: string;
  company?: string;
  minPremium?: number;
  maxPremium?: number;
  currency?: string;
}): InsuranceProduct[] {
  return SAMPLE_PRODUCTS.filter(p => {
    if (params.type && p.type !== params.type) return false;
    if (params.company && p.company !== params.company) return false;
    if (params.currency && p.currency !== params.currency) return false;
    if (params.minPremium && p.minPremium < params.minPremium) return false;
    if (params.maxPremium && p.minPremium > params.maxPremium) return false;
    return true;
  });
}

// 获取产品详情
export function getProductById(id: string): InsuranceProduct | undefined {
  return SAMPLE_PRODUCTS.find(p => p.id === id);
}

// 简单保费计算（示例，实际需要更复杂的精算逻辑）
export function calculatePremium(params: {
  productId: string;
  age: number;
  gender: 'male' | 'female';
  smoker: boolean;
  sumAssured: number;
  paymentTerm: number;
}): number | null {
  const product = getProductById(params.productId);
  if (!product) return null;
  
  // 简化的保费计算逻辑
  let basePremium = params.sumAssured * 0.03;  // 基础费率 3%
  
  // 年龄加载
  if (params.age > 40) basePremium *= 1.2;
  if (params.age > 50) basePremium *= 1.3;
  if (params.age > 60) basePremium *= 1.5;
  
  // 性别调整
  if (params.gender === 'male') basePremium *= 1.1;
  
  // 吸烟加载
  if (params.smoker) basePremium *= 1.5;
  
  // 供款期调整
  const annualPremium = basePremium / params.paymentTerm;
  
  return Math.round(annualPremium);
}
