'user client'
import React, { useState, useEffect } from 'react';
import { MuiFileInput } from 'mui-file-input';
import Typography from '@mui/material/Typography';

const [file, setFile] = useState();
const [preview, setPreview] = useState();

//ファイルhandleChange関数
const handleChangeFile = (newFile) => {
  setFile(newFile);
};

//メモリ内のBLOBにアクセスするためのURL生成
useEffect(() => {
  if (file) {
    setPreview(URL.createObjectURL(file));
  }
}, [file]);

//中略

//ファイル選択 UI
<Typography variant="body1" component="h6" mt={1} gutterBottom>ファイル選択</Typography>
<MuiFileInput value={file} onChange={handleChangeFile} variant="outlined" />
<br />
<Typography variant="caption" component="div" gutterBottom>PNG/JPEG ファイルのみ、ファイルサイズは5MB以内。</Typography>
{(file) && !(file.type === "image/png" || file.type === "image/jpeg") && (
  <Typography variant="caption" component="div" color="error.main" gutterBottom>このファイルタイプはサポートしていません。</Typography>
)}

//プレビュー画面
{(file) && (file.type === "image/png" || file.type === "image/jpeg") && (
  <React.Fragment>
    <Typography variant="caption" component="div" mt={1} gutterBottom>送信画像プレビュー</Typography>
    <img id="preview" src={preview} alt="preview" className="previewimg"/>
  </React.Fragment>
)}