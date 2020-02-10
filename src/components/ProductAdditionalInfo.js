import React from 'react';

const ProductAdditionalInfo = () => (
  <div className="flex px-4 md:px-6 py-6 justify-center">
    <div className="w-full md:w-2/3">
      <table className="table-auto text-left leading-relaxed">
        <tbody>
          <tr>
            <th className="text-black pr-4 md:pr-32 py-2">Weight</th>
            <td className="px-4 py-2 text-gray-700">1.73 kg</td>
          </tr>
          <tr>
            <th className="text-black pr-4 md:pr-32 py-2">Dimensions</th>
            <td className="px-4 py-2 text-gray-700">100 x 37 x 100 cm</td>
          </tr>
          <tr>
            <th className="text-black pr-4 md:pr-32 py-2">Materials</th>
            <td className="px-4 py-2 text-gray-700">80% cotton, 20% linen</td>
          </tr>
          <tr>
            <th className="text-black pr-4 md:pr-32 py-2">Other Info</th>
            <td className="px-4 py-2 text-gray-700">
              American heirloom jean shorts pug seitan letterpress.
            </td>
          </tr>
          <tr>
            <th className="text-black pr-4 md:pr-32 py-2">Size</th>
            <td className="px-4 py-2 text-gray-700">One Size, XL, L, M, S</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductAdditionalInfo;
