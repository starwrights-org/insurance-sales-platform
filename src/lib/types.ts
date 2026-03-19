// 保险产品类型
export interface InsuranceProduct {
  id: string;
  company: string;  // 保险公司
  companyLogo?: string;
  name: string;  // 产品名称
  nameEn?: string;
  type: 'life' | 'medical' | 'critical_illness' | 'savings' | 'annuity';  // 产品类型
  currency: 'HKD' | 'USD' | 'CNY';
  minPremium: number;  // 最低保费
  features: string[];  // 产品特点
  highlights: string[];  // 亮点
  limitations?: string[];  // 限制
  commission?: number;  // 佣金比例
  createdAt: string;
  updatedAt: string;
}

// 保费计算请求
export interface PremiumCalcRequest {
  productId: string;
  age: number;
  gender: 'male' | 'female';
  smoker: boolean;
  sumAssured: number;  // 保额
  paymentTerm: number;  // 供款年期
  coverageTerm?: number;  // 保障年期
}

// 保费计算结果
export interface PremiumCalcResult {
  productId: string;
  productName: string;
  company: string;
  annualPremium: number;  // 年缴保费
  monthlyPremium: number;  // 月缴保费
  totalPremium: number;  // 总保费
  currency: string;
  breakdown?: {
    basePremium: number;
    loadings?: number;
    discounts?: number;
  };
}

// 客户信息
export interface Customer {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  age: number;
  gender: 'male' | 'female';
  smoker: boolean;
  occupation?: string;
  income?: number;
  existingCoverage?: string;
  needs?: string[];
  notes?: string;
  status: 'lead' | 'contacted' | 'proposal_sent' | 'negotiating' | 'closed_won' | 'closed_lost';
  assignedTo: string;  // 销售人员 ID
  createdAt: string;
  updatedAt: string;
}

// 方案建议书
export interface Proposal {
  id: string;
  customerId: string;
  customerName: string;
  title: string;
  products: ProposalProduct[];
  totalAnnualPremium: number;
  totalMonthlyPremium: number;
  currency: string;
  notes?: string;
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected';
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProposalProduct {
  productId: string;
  productName: string;
  company: string;
  sumAssured: number;
  annualPremium: number;
  paymentTerm: number;
  reason?: string;  // 推荐理由
}

// 用户/销售人员
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'sales';
  teamId: string;
  avatar?: string;
  createdAt: string;
}

// 团队/机构
export interface Team {
  id: string;
  name: string;
  company: string;  // 所属机构（券商/银行/保经）
  logo?: string;
  subscription: 'trial' | 'basic' | 'pro' | 'enterprise';
  memberCount: number;
  createdAt: string;
}

// 销售统计
export interface SalesStats {
  userId: string;
  period: 'daily' | 'weekly' | 'monthly';
  date: string;
  proposalsCreated: number;
  proposalsSent: number;
  customersContacted: number;
  dealsWon: number;
  premiumClosed: number;
  conversionRate: number;
}

// 产品类型映射
export const PRODUCT_TYPES = {
  life: '人寿保险',
  medical: '医疗保险',
  critical_illness: '危疾保险',
  savings: '储蓄保险',
  annuity: '年金保险',
} as const;

// 保险公司列表
export const INSURANCE_COMPANIES = [
  { id: 'aia', name: '友邦保险', nameEn: 'AIA', logo: '/logos/aia.png' },
  { id: 'prudential', name: '保诚保险', nameEn: 'Prudential', logo: '/logos/prudential.png' },
  { id: 'axa', name: '安盛保险', nameEn: 'AXA', logo: '/logos/axa.png' },
  { id: 'manulife', name: '宏利保险', nameEn: 'Manulife', logo: '/logos/manulife.png' },
  { id: 'ftlife', name: '富通保险', nameEn: 'FTLife', logo: '/logos/ftlife.png' },
  { id: 'sunlife', name: '永明金融', nameEn: 'Sun Life', logo: '/logos/sunlife.png' },
  { id: 'fwd', name: '富卫保险', nameEn: 'FWD', logo: '/logos/fwd.png' },
  { id: 'yt', name: '万通保险', nameEn: 'YF Life', logo: '/logos/yt.png' },
] as const;

// 客户状态映射
export const CUSTOMER_STATUS = {
  lead: '潜在客户',
  contacted: '已联系',
  proposal_sent: '已发方案',
  negotiating: '洽谈中',
  closed_won: '已成交',
  closed_lost: '已流失',
} as const;
