import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ButtonComeBack() {
  const navigate = useNavigate();
  return (
    <>
      <button  onClick={() => navigate(-1)} className="return">🡰 Назад</button>
    </>
  );
}



