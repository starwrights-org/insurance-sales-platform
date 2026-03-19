'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SAMPLE_PRODUCTS } from '@/lib/products';
import { PRODUCT_TYPES, INSURANCE_COMPANIES } from '@/lib/types';

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');

  const filteredProducts = SAMPLE_PRODUCTS.filter(p => {
    if (selectedType && p.type !== selectedType) return false;
    if (selectedCompany && p.company !== selectedCompany) return false;
    return true;
  });

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
            <Link href="/calculator" className="text-gray-600 hover:text-gray-900">保费计算</Link>
            <Link href="/compare" className="text-gray-600 hover:text-gray-900">产品对比</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition">
              登录
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">产品库</h1>
        <p className="text-gray-600 mb-8">覆盖主流保险公司热销产品</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">全部类型</option>
            {Object.entries(PRODUCT_TYPES).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>

          <select
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">全部公司</option>
            {INSURANCE_COMPANIES.map(company => (
              <option key={company.id} value={company.name}>{company.name}</option>
            ))}
          </select>

          {(selectedType || selectedCompany) && (
            <button
              onClick={() => { setSelectedType(''); setSelectedCompany(''); }}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              清除筛选
            </button>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {PRODUCT_TYPES[product.type]}
                  </span>
                  <span className="text-sm text-gray-500">{product.currency}</span>
                </div>
                
                <div className="text-sm text-gray-500 mb-1">{product.company}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="space-y-2 mb-4">
                  {product.highlights.slice(0, 3).map((h, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      {h}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">最低保费</span>
                    <div className="font-bold text-gray-900">
                      {product.currency} {product.minPremium.toLocaleString()}/年
                    </div>
                  </div>
                  <Link
                    href={`/calculator?product=${product.id}`}
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition"
                  >
                    计算保费
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            没有找到符合条件的产品
          </div>
        )}
      </div>
    </main>
  );
}
