'use client';
import { useState } from 'react';

export default function FormStylePage() {
  const [tabA, setTabA] = useState('t1');
  const [tabB, setTabB] = useState('p1');
  return (
    <>
      <div className="sticky inset-x-0 top-0 z-10">
        <div className="flex items-center justify-between h-14 px-4 py-2 border-b border-slate-200 bg-slate-50">
          <p>폼 스타일</p>
          <div>테스트</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-4 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
        <div className="flex-1 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">폼 스타일</h1>
          <p className="text-slate-500 mb-8">Tailwind 기반 재사용 버튼 데모</p>
          <section className="space-y-8">
            {/* 버튼 스타일 */}
            <div className=''>
              <h2 className="font-medium mb-3">버튼</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">버튼 스타일</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-300">기본버튼</button>
                    <button className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-100">라인버튼</button>
                    <button className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium underline bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed select-none">Ghost</button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">버튼 크기</label>
                  <div className="flex flex-wrap gap-2">
                    <button className='inline-flex items-center justify-center h-8 px-3 text-sm gap-1.5 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400'>작은</button>
                    <button className='inline-flex items-center justify-center h-10 px-4 text-sm gap-1.5 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400'>중간</button>
                    <button className='inline-flex items-center justify-center h-12 px-5 text-sm gap-1.5 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400'>큰</button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">disabled 버튼</label>
                  <div className="flex flex-wrap gap-2">
                    <button disabled className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-300">기본버튼</button>
                    <button disabled className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-100">라인버튼</button>
                    <button disabled className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium underline bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-300 disabled:text-slate-400 disabled:cursor-not-allowed select-none">Ghost</button>
                  </div>
                </div>


                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">icon 버튼</label>
                  <div className="flex flex-wrap gap-2">
                    <button className="inline-flex items-center justify-center h-10 px-4 text-sm gap-1 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                      기본버튼
                    </button>
                    <button disabled className="inline-flex items-center justify-center h-10 px-4 text-sm gap-1 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-slate-300">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                      기본버튼
                    </button>
                    <button className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-100">
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true"></span>  
                      라인버튼
                    </button>
                    <button disabled className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 disabled:text-slate-400 disabled:bg-slate-100">
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true"></span>  
                      라인버튼
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">버튼 그룹</label>
                  <div className="flex flex-col gap-3">
                    {/* Outline 그룹 */}
                    <div role="group" aria-label="라인 버튼 그룹" className="inline-flex rounded-md isolate">
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 rounded-l-md">왼쪽</button>
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 -ml-px">가운데</button>
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 -ml-px rounded-r-md">오른쪽</button>
                    </div>
                    {/* Solid 그룹 */}
                    <div role="group" aria-label="채움 버튼 그룹" className="inline-flex rounded-md isolate">
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 rounded-l-md">왼쪽</button>
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 -ml-px">가운데</button>
                      <button className="inline-flex items-center justify-center h-10 px-4 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 -ml-px rounded-r-md">오른쪽</button>
                    </div>
                    {/* 작은 사이즈 그룹 */}
                    <div role="group" aria-label="작은 라인 버튼 그룹" className="inline-flex rounded-md isolate">
                      <button className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 rounded-l-md">작은-왼쪽</button>
                      <button className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 -ml-px">작은-가운데</button>
                      <button className="inline-flex items-center justify-center h-8 px-3 text-sm font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 select-none bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 active:bg-slate-100 -ml-px rounded-r-md">작은-오른쪽</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* 탭 인터페이스 */}
            <div>
              <h2 className="font-medium mb-3">탭 인터페이스</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4">
                {/* 언더라인 탭 */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">언더라인 탭</label>
                  <div role="tablist" aria-label="언더라인 탭" className="flex items-end gap-2 border-b border-slate-200">
                    <button
                      id="t1-tab"
                      role="tab"
                      aria-controls="t1-panel"
                      aria-selected={tabA === 't1'}
                      onClick={() => setTabA('t1')}
                      className={`inline-flex items-center h-10 px-3 -mb-px border-b-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabA === 't1'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      탭 1
                    </button>
                    <button
                      id="t2-tab"
                      role="tab"
                      aria-controls="t2-panel"
                      aria-selected={tabA === 't2'}
                      onClick={() => setTabA('t2')}
                      className={`inline-flex items-center h-10 px-3 -mb-px border-b-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabA === 't2'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      탭 2
                    </button>
                    <button
                      id="t3-tab"
                      role="tab"
                      aria-controls="t3-panel"
                      aria-selected={tabA === 't3'}
                      onClick={() => setTabA('t3')}
                      className={`inline-flex items-center h-10 px-3 -mb-px border-b-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabA === 't3'
                          ? 'border-blue-600 text-blue-600'
                          : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
                      }`}
                    >
                      탭 3
                    </button>
                  </div>
                  <div className="mt-3">
                    <div
                      id="t1-panel"
                      role="tabpanel"
                      aria-labelledby="t1-tab"
                      hidden={tabA !== 't1'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      탭 1 내용입니다.
                    </div>
                    <div
                      id="t2-panel"
                      role="tabpanel"
                      aria-labelledby="t2-tab"
                      hidden={tabA !== 't2'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      탭 2 내용입니다.
                    </div>
                    <div
                      id="t3-panel"
                      role="tabpanel"
                      aria-labelledby="t3-tab"
                      hidden={tabA !== 't3'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      탭 3 내용입니다.
                    </div>
                  </div>
                </div>

                {/* 필(rounded) 탭 */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">필 탭</label>
                  <div role="tablist" aria-label="필 탭" className="flex items-center gap-2">
                    <button
                      id="p1-tab"
                      role="tab"
                      aria-controls="p1-panel"
                      aria-selected={tabB === 'p1'}
                      onClick={() => setTabB('p1')}
                      className={`h-9 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabB === 'p1' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      첫번째
                    </button>
                    <button
                      id="p2-tab"
                      role="tab"
                      aria-controls="p2-panel"
                      aria-selected={tabB === 'p2'}
                      onClick={() => setTabB('p2')}
                      className={`h-9 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabB === 'p2' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      두번째
                    </button>
                    <button
                      id="p3-tab"
                      role="tab"
                      aria-controls="p3-panel"
                      aria-selected={tabB === 'p3'}
                      onClick={() => setTabB('p3')}
                      className={`h-9 px-4 rounded-full text-sm font-medium transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 ${
                        tabB === 'p3' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      세번째
                    </button>
                  </div>
                  <div className="mt-3">
                    <div
                      id="p1-panel"
                      role="tabpanel"
                      aria-labelledby="p1-tab"
                      hidden={tabB !== 'p1'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      첫번째 탭 내용입니다.
                    </div>
                    <div
                      id="p2-panel"
                      role="tabpanel"
                      aria-labelledby="p2-tab"
                      hidden={tabB !== 'p2'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      두번째 탭 내용입니다.
                    </div>
                    <div
                      id="p3-panel"
                      role="tabpanel"
                      aria-labelledby="p3-tab"
                      hidden={tabB !== 'p3'}
                      className="p-3 text-sm text-slate-700 border border-slate-200 rounded-md bg-white"
                    >
                      세번째 탭 내용입니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 체크박스 & 라디오버튼 */}
            <div>
              <h2 className="font-medium mb-3">체크박스 & 라디오버튼</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input id="cb1" type="checkbox" className="h-4 w-4 accent-blue-600" />
                    <label htmlFor="cb1" className="text-sm text-slate-800">체크박스 1</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input id="cb2" type="checkbox" defaultChecked className="h-4 w-4 accent-blue-600" />
                    <label htmlFor="cb2" className="text-sm text-slate-800">체크됨</label>
                  </div>
                  <div className="flex items-center gap-2 opacity-60">
                    <input id="cb3" type="checkbox" disabled className="h-4 w-4 accent-blue-600" />
                    <label htmlFor="cb3" className="text-sm text-slate-800">비활성</label>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <input id="r1" name="rgrp" type="radio" className="h-4 w-4 accent-blue-600" />
                      <label htmlFor="r1" className="text-sm text-slate-800">옵션 A</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input id="r2" name="rgrp" type="radio" defaultChecked className="h-4 w-4 accent-blue-600" />
                      <label htmlFor="r2" className="text-sm text-slate-800">옵션 B</label>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center gap-3 cursor-pointer select-none">
                    <span className="text-sm">토글</span>
                    <input type="checkbox" className="peer sr-only" defaultChecked />
                    <span className="relative h-5 w-9 rounded-full bg-slate-300 transition-colors peer-checked:bg-blue-600 after:content-[''] after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-transform peer-checked:after:translate-x-4" />
                  </label>
                </div>
              </div>
            </div>
            {/* 텍스트 입력박스 */}
            <div>
              <h2 className="font-medium mb-3">텍스트 입력박스</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">기본 입력 (md)</label>
                  <input
                    type="text"
                    placeholder="기본 상태"
                    className="block w-full h-10 px-3 text-sm rounded-md border border-slate-300 bg-white placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">에러</label>
                  <input
                    type="text"
                    placeholder="에러 상태"
                    className="block w-full h-10 px-3 text-sm rounded-md border border-red-500 bg-white placeholder:text-slate-400 focus:bg-red-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500 focus-visible:ring-offset-0"
                  />
                  <p className="text-xs text-red-600">오류 메시지를 표시합니다.</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">성공</label>
                  <input
                    type="text"
                    placeholder="성공 상태"
                    className="block w-full h-10 px-3 text-sm rounded-md border border-emerald-500 bg-white placeholder:text-slate-400 focus:bg-emerald-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-600 focus-visible:ring-offset-0"
                  />
                  <p className="text-xs text-emerald-600">성공 상태입니다.</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">비활성</label>
                  <input
                    type="text"
                    disabled
                    placeholder="입력할 수 없음"
                    className="block w-full h-10 px-3 text-sm rounded-md border border-slate-300 bg-slate-100 text-slate-400 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">작은 입력 (sm)</label>
                  <input
                    type="text"
                    placeholder="작게 입력"
                    className="block w-full h-9 px-3 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">큰 입력 (lg)</label>
                  <input
                    type="text"
                    placeholder="크게 입력"
                    className="block w-full h-12 px-4 text-base rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>






            
            <div>
              <h2 className="font-medium mb-3">States</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">검색</label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.22 12.03l4.25 4.25a.75.75 0 1 0 1.06-1.06l-4.25-4.25A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" /></svg>
                    </span>
                    <input
                      type="text"
                      placeholder="검색어를 입력"
                      className="block w-full h-10 pl-9 pr-3 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">우측 아이콘</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="오른쪽 아이콘"
                      className="block w-full h-10 pr-9 pl-3 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                    />
                    <span className="absolute inset-y-0 right-3 inline-flex items-center text-slate-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 4.22 12.03l4.25 4.25a.75.75 0 1 0 1.06-1.06l-4.25-4.25A6.75 6.75 0 0 0 10.5 3.75Zm-5.25 6.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Z" clipRule="evenodd" /></svg>
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">셀렉트</label>
                  <select className="block w-full h-10 px-3 text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0">
                    <option>옵션 1</option>
                    <option>옵션 2</option>
                    <option>옵션 3</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">텍스트 영역</label>
                  <textarea
                    rows={4}
                    placeholder="내용을 입력하세요"
                    className="block w-full px-3 py-2 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:bg-blue-50 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">파일 업로드</label>
                  <input
                    type="file"
                    className="block w-full text-sm rounded-md border border-slate-300 bg-white text-slate-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200"
                  />
                  <p className="text-xs text-slate-500">PNG, JPG, PDF (최대 10MB)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}