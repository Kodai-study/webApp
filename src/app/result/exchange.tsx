"use client";

import { Calendar, Factory, Truck, Tag, Cpu } from 'lucide-react';

const ProductDisplay = ({ productData }) => {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex flex-col items-center">
        {/* <img className="w-48 h-48 object-cover rounded-full" src={productData.img_file_pass} alt="Product" /> */}
        <img className="object-cover" src="imgs/test/ana.png" alt="Product" />

        <div className="mt-4 text-2xl font-semibold">
          シリアルナンバー: {productData.serial_number}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start text-lg text-gray-600 ml-">
        <div className="flex items-center mb-3">
          <Cpu className="mr-3" size={20} />
          <span>型番: </span>{productData.model_name}
        </div>

        <div className="flex items-center mb-3">
          <Truck className="mr-3" size={20} />
          <span>出荷先メーカー: </span>{productData.maker_name}
        </div>

        <div className="flex items-center">
          <Factory className="mr-3" size={20} />
          <span>製造工場: </span>{productData.factory_name}
        </div>

        <div className="mt-3 flex items-center">
          <Calendar className="mr-3" size={20} />
          <span>出荷日: </span>{productData.processing_date.toLocaleDateString()}
        </div>

        <div className="mt-3 flex items-center">
          <Tag className="mr-3" size={20} />
          <span>判定結果: </span>{productData.judgment === 1 ? '合格' : '不合格'}
        </div>
      </div>
    </div>

  );
};

export default ProductDisplay;
