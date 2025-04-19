'use client';
// src/components/MoroccanPattern.js
export default function MoroccanPattern() {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-10">
      <img
        src="/images/tea.jpg"
        alt=""
        className="absolute inset-0 w-[200%] h-[200%] opacity-20"
        style={{
          transform: 'translate(-25%, -25%)',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
        aria-hidden="true"
      />
      </div>
    );
  }