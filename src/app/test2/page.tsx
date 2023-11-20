// 'use client'
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function MyForm() {
//   const router = useRouter();
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     router.push(`/result?no=${inputValue}`);
//   };

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         シリアルナンバーを入力してください：
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleChange}
//         />
//       </label>
//       <button type="submit">送信</button>
//     </form>
//   );
// }



