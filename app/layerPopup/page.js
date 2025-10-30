"use client";

import { useEffect, useRef, useState } from "react";

export default function LayerPopupPage() {
  const [openModal, setOpenModal] = useState(false);
  const [openSheetRight, setOpenSheetRight] = useState(false);
  const [openSheetBottom, setOpenSheetBottom] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpenModal(false);
        setOpenSheetRight(false);
        setOpenSheetBottom(false);
        setOpenAlert(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="sticky inset-x-0 top-0 z-10">
        <div className="flex items-center justify-between h-14 px-4 py-2 border-b border-slate-200 bg-slate-50">
          <p>레이어 팝업 스타일</p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">ESC로 닫기</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
        <div className="flex-1 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">레이어 팝업 컴포넌트</h1>
          <p className="text-slate-500 mb-8">Tailwind 기반 모달/시트/알럿 데모</p>

          <section className="space-y-8">
            <div className=''>
              <h2 className="font-medium mb-3">기본 모달 팝업</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                {/* 모달 예시 */}
                <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative overflow-hidden w-full max-w-lg rounded-lg bg-white shadow-xl ring-1 ring-slate-900/10">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
                    <h2 id="modal-title" className="text-base font-semibold">모달 타이틀</h2>
                    <button className="inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenModal(false)} aria-label="닫기">
                      <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                  </div>
                  <div className="overflow-y-auto p-5 text-slate-700 ">
                    여기 모달 본문입니다. 스크롤이 필요한 경우 자동 스크롤됩니다.
                  </div>
                  <div className="flex justify-end gap-2 px-5 py-4 border-t border-slate-200 bg-slate-50">
                    <button className="h-9 px-3 rounded-md border border-slate-300 hover:bg-slate-100" onClick={() => setOpenModal(false)}>취소</button>
                    <button className="h-9 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpenModal(false)}>확인</button>
                  </div>
                </div>
                {/* 모달 */}
                <Overlay open={openModal} onClick={() => setOpenModal(false)}>
                  <div role="dialog" aria-modal="true" aria-labelledby="modal-title" className="relative overflow-hidden w-full max-w-lg rounded-lg bg-white shadow-xl ring-1 ring-slate-900/10">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
                      <h2 id="modal-title" className="text-base font-semibold">모달 타이틀</h2>
                      <button className="inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenModal(false)} aria-label="닫기">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                      </button>
                    </div>
                    <div className="overflow-y-auto p-5 text-slate-700 ">
                      여기 모달 본문입니다. 스크롤이 필요한 경우 자동 스크롤됩니다.
                    </div>
                    <div className="flex justify-end gap-2 px-5 py-4 border-t border-slate-200 bg-slate-50">
                      <button className="h-9 px-3 rounded-md border border-slate-300 hover:bg-slate-100" onClick={() => setOpenModal(false)}>취소</button>
                      <button className="h-9 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpenModal(false)}>확인</button>
                    </div>
                  </div>
                </Overlay>
                <div>
                  <button onClick={() => setOpenModal(true)} className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-50">모달 열기</button>
                </div>
              </div>
            </div>
            <div className=''>
              <h2 className="font-medium mb-3">오른쪽 하단 모달 팝업</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                {/* 오른쪽 하단 모달 예시 */}
                <div role="dialog" aria-modal="true" aria-labelledby="sheet-title" className="ml-auto h-full w-[92vw] max-w-md bg-white shadow-xl ring-1 ring-slate-900/10">
                  <div className="flex items-center justify-between px-5 h-14 border-b border-slate-200">
                    <h2 id="sheet-title" className="text-base font-semibold">오른쪽 하단 모달</h2>
                    <button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenSheetRight(false)} aria-label="닫기">
                      <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                  </div>
                  <div className="p-5 space-y-3 text-sm text-slate-700">
                    <p>내용을 이 영역에 배치하세요.</p>
                    <p>폼 요소, 텍스트, 이미지 등</p>
                  </div>
                </div>
                {/* 오른쪽 하단 모달 */}
                <Overlay open={openSheetRight} onClick={() => setOpenSheetRight(false)} align="end">
                  <div role="dialog" aria-modal="true" aria-labelledby="sheet-title" className="ml-auto h-full w-[92vw] max-w-md bg-white shadow-xl ring-1 ring-slate-900/10">
                    <div className="flex items-center justify-between px-5 h-14 border-b border-slate-200">
                      <h2 id="sheet-title" className="text-base font-semibold">오른쪽 하단 모달</h2>
                      <button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenSheetRight(false)} aria-label="닫기">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                      </button>
                    </div>
                    <div className="p-5 space-y-3 text-sm text-slate-700">
                      <p>내용을 이 영역에 배치하세요.</p>
                      <p>폼 요소, 텍스트, 이미지 등</p>
                    </div>
                  </div>
                </Overlay>
                <div>
                  <button onClick={() => setOpenSheetRight(true)} className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-50">오른쪽 모달</button>
                </div>
              </div>
            </div>
            <div className=''>
              <h2 className="font-medium mb-3">하단 모달 팝업</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                {/* 하단 모달 예시 */}
                <div role="dialog" aria-modal="true" aria-labelledby="bottom-title" className="overflow-hidden mx-auto w-full max-w-2xl rounded-lg bg-white shadow-2xl ring-1 ring-slate-900/10">
                  <div className="flex items-center justify-between px-5 h-12 border-b border-slate-200">
                    <h2 id="bottom-title" className="text-base font-semibold">하단 모달</h2>
                    <button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenSheetBottom(false)} aria-label="닫기">
                      <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                  </div>
                  <div className="p-5 text-sm text-slate-700">
                    모바일 UX에 적합한 하단 시트입니다.
                  </div>
                </div>
                {/* 하단 모달 */}
                <Overlay open={openSheetBottom} onClick={() => setOpenSheetBottom(false)} align="bottom">
                  <div role="dialog" aria-modal="true" aria-labelledby="bottom-title" className="mx-auto w-full max-w-2xl rounded-lg bg-white shadow-2xl ring-1 ring-slate-900/10">
                    <div className="flex items-center justify-between px-5 h-12 border-b border-slate-200">
                      <h2 id="bottom-title" className="text-base font-semibold">바텀 시트</h2>
                      <button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-slate-100" onClick={() => setOpenSheetBottom(false)} aria-label="닫기">
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#777"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                      </button>
                    </div>
                    <div className="p-5 text-sm text-slate-700">
                      모바일 UX에 적합한 하단 시트입니다.
                    </div>
                  </div>
                </Overlay>
                <div>
                  <button onClick={() => setOpenSheetBottom(true)} className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-50">하단 모달</button>
                </div>
              </div>
            </div>
            <div className=''>
              <h2 className="font-medium mb-3">알럿 다이얼로그</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 border-y border-black/10 py-4'>
                {/* 하단 모달 예시 */}
                <div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-desc" className="relative w-full max-w-sm rounded-lg bg-white shadow-xl ring-1 ring-slate-900/10">
                  <div className="p-5">
                    <h2 id="alert-title" className="text-base font-semibold mb-1">삭제하시겠어요?</h2>
                    <p id="alert-desc" className="text-sm text-slate-600">이 작업은 되돌릴 수 없습니다.</p>
                    <div className="mt-4 flex justify-end gap-2">
                      <button className="h-9 px-3 rounded-md border border-slate-300 hover:bg-slate-100" onClick={() => setOpenAlert(false)}>취소</button>
                      <button className="h-9 px-3 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => setOpenAlert(false)}>삭제</button>
                    </div>
                  </div>
                </div>
                {/* 알럿 다이얼로그 */}
                <Overlay open={openAlert} onClick={() => setOpenAlert(false)}>
                  <div role="alertdialog" aria-modal="true" aria-labelledby="alert-title" aria-describedby="alert-desc" className="relative w-full max-w-sm rounded-lg bg-white shadow-xl ring-1 ring-slate-900/10">
                    <div className="p-5">
                      <h2 id="alert-title" className="text-base font-semibold mb-1">삭제하시겠어요?</h2>
                      <p id="alert-desc" className="text-sm text-slate-600">이 작업은 되돌릴 수 없습니다.</p>
                      <div className="mt-4 flex justify-end gap-2">
                        <button className="h-9 px-3 rounded-md border border-slate-300 hover:bg-slate-100" onClick={() => setOpenAlert(false)}>취소</button>
                        <button className="h-9 px-3 rounded-md bg-red-600 text-white hover:bg-red-700" onClick={() => setOpenAlert(false)}>삭제</button>
                      </div>
                    </div>
                  </div>
                </Overlay>
                <div>
                  <button onClick={() => setOpenAlert(true)} className="inline-flex items-center justify-center h-10 px-4 text-sm gap-2 rounded-md font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-50">알럿 다이얼로그</button>
                </div>
              </div>
            </div>
            {/* 트리거 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Overlay({ open, onClick, align = "center", children }) {
  if (!open) return null;
  const contentWrap =
    align === "end"
      ? "items-end justify-end"
      : align === "bottom"
      ? "items-end justify-center"
      : "items-center justify-center";
  return (
    <div className={`fixed inset-0 z-50 flex ${contentWrap}`}>
      <div className="absolute inset-0 bg-black/50" onClick={onClick} />
      <div className="relative m-4 max-h-[calc(100dvh-2rem)] overflow-auto">{children}</div>
    </div>
  );
}