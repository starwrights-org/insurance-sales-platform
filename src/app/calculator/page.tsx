'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SAMPLE_PRODUCTS, calculatePremium } from '@/lib/products';
import { PRODUCT_TYPES } from '@/lib/types';

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    productId: '',
    age: 35,
    gender: 'male' as 'male' | 'female',
    smoker: false,
    sumAssured: 100000,
    paymentTerm: 10,
  });
  
  const [results, setResults] = useState<Array<{
    productId: string;
    productName: string;
    company: string;
    annualPremium: number;
    currency: string;
  }>>([]);

  const handleCalculate = () => {
    // 如果选择了特定产品，只计算该产品
    // 否则计算所有产品
    const productsToCalc = formData.productId 
      ? SAMPLE_PRODUCTS.filter(p => p.id === formData.productId)
      : SAMPLE_PRODUCTS;

    const newResults = productsToCalc.map(product => {
      const premium = calculatePremium({
        ...formData,
        productId: product.id,
      });
      return {
        productId: product.id,
        productName: product.name,
        company: product.company,
        annualPremium: premium || 0,
        currency: product.currency,
      };
    }).sort((a, b) => a.annualPremium - b.annualPremium);

    setResults(newResults);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="font-bold text-xl text-gray-900">InsurePro</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">产品库</Link>
            <Link href="/compare" className="text-gray-600 hover:text-gray-900">产品对比</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              登录
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">保费计算器</h1>
        <p className="text-gray-600 mb-8">快速计算各保险公司产品保费</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">客户信息</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">选择产品（可选）</label>
                  <select
                    value={formData.productId}
                    onChange={(e) => setFormData({...formData, productId: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">全部产品对比</option>
                    {SAMPLE_PRODUCTS.map(p => (
                      <option key={p.id} value={p.id}>{p.company} - {p.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">年龄</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    min={18}
                    max={70}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">性别</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={formData.gender === 'male'}
                        onChange={() => setFormData({...formData, gender: 'male'})}
                        className="mr-2"
                      />
                      男
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={formData.gender === 'female'}
                        onChange={() => setFormData({...formData, gender: 'female'})}
                        className="mr-2"
                      />
                      女
                    </label>
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.smoker}
                      onChange={(e) => setFormData({...formData, smoker: e.target.checked})}
                      className="mr-2"
                    />
                    <span className="text-sm font-medium text-gray-700">吸烟</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">保额 (USD)</label>
                  <input
                    type="number"
                    value={formData.sumAssured}
                    onChange={(e) => setFormData({...formData, sumAssured: parseInt(e.target.value) || 0})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    step={10000}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">供款年期</label>
                  <select
                    value={formData.paymentTerm}
                    onChange={(e) => setFormData({...formData, paymentTerm: parseInt(e.target.value)})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={5}>5 年</option>
                    <option value={10}>10 年</option>
                    <option value={15}>15 年</option>
                    <option value={20}>20 年</option>
                  </select>
                </div>

                <button
                  onClick={handleCalculate}
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition"
                >
                  计算保费
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6">计算结果</h2>
              
              {results.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  输入客户信息后点击「计算保费」
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((result, index) => (
                    <div
                      key={result.productId}
                      className={`p-4 rounded-xl border ${index === 0 ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          {index === 0 && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded mb-2 inline-block">
                              最优选择
                            </span>
                          )}
                          <div className="text-sm text-gray-500">{result.company}</div>
                          <div className="font-bold text-gray-900">{result.productName}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">年缴保费</div>
                          <div className="text-2xl font-bold text-blue-600">
                            {result.currency} {result.annualPremium.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500">
                            月缴约 {result.currency} {Math.round(result.annualPremium / 12).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200 flex gap-4">
                    <button className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">
                      生成方案 PDF
                    </button>
                    <button className="flex-1 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-lg transition">
                      产品详细对比
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
