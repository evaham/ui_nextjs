export default function TableStylePage() {
  return (
    <>
      <div className="sticky inset-x-0 top-0 z-10">
        <div className="flex items-center justify-between h-14 px-4 py-2 border-b border-slate-200 bg-slate-50">
          <p>테이블 스타일</p>
          <div>테스트</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-4 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
        <div className="flex-1 w-full max-w-6xl mx-auto">
          <h1 className="text-2xl font-semibold mb-2">테이블 스타일</h1>
          <p className="text-slate-500 mb-8">Tailwind 기반 테이블 디자인 데모</p>
          <section className="space-y-8">
            {/* 컬럼 분리선 테이블 (세로 구분선) */}
            <div>
              <h2 className="font-medium mb-3">컬럼 분리선 테이블</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      {['이름','역할','이메일','상태','메모'].map((h, idx) => (
                        <th key={idx} className={`px-4 py-3 font-semibold ${idx>0 ? 'border-l border-slate-200' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '홍길동', role:'관리자', email:'hong@example.com', status:'Active', note:'핵심 담당자' },
                      { name: '김영희', role:'에디터', email:'kim@example.com', status:'Invited', note:'신규 합류' },
                      { name: '이철수', role:'뷰어', email:'lee@example.com', status:'Suspended', note:'권한 점검' },
                    ].map((row, rIdx) => {
                      const cells = [row.name, row.role, row.email, row.status, row.note];
                      return (
                        <tr key={rIdx} className="odd:bg-white even:bg-slate-50 hover:bg-slate-100">
                          {cells.map((c, cIdx) => (
                            <td key={cIdx} className={`px-4 py-1 ${cIdx>0 ? 'border-l border-slate-200' : ''}`}>{c}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 기본 테이블 */}
            <div>
              <h2 className="font-medium mb-3">기본 테이블</h2>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">이름</th>
                      <th className="px-4 py-3 border-l border-slate-200 font-semibold">역할</th>
                      <th className="px-4 py-3 border-l border-slate-200 font-semibold">이메일</th>
                      <th className="px-4 py-3 border-l border-slate-200 font-semibold text-right">상태</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { name: "홍길동", role: "관리자", email: "hong@example.com", status: "Active" },
                      { name: "김영희", role: "에디터", email: "kim@example.com", status: "Invited" },
                      { name: "이철수", role: "뷰어", email: "lee@example.com", status: "Suspended" },
                    ].map((row, i) => (
                      <tr key={i} className="bg-white">
                        <td className="px-4 py-3">{row.name}</td>
                        <td className="px-4 py-3 border-l border-slate-200 text-slate-700">{row.role}</td>
                        <td className="px-4 py-3 border-l border-slate-200 text-slate-600">{row.email}</td>
                        <td className="px-4 py-3 text-right border-l border-slate-200">
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-50 text-emerald-700">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


            {/* 스티키 헤더 + 스크롤 */}
            <div>
              <h2 className="font-medium mb-3">스티키 헤더</h2>
              <div className="overflow-auto rounded-lg border border-slate-200 max-h-72">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-700 sticky top-0 z-10">
                    <tr>
                      <th className="px-4 py-3 font-semibold">ID</th>
                      <th className="px-4 py-3 font-semibold">제목</th>
                      <th className="px-4 py-3 font-semibold">상태</th>
                      <th className="px-4 py-3 font-semibold">날짜</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <tr key={i} className="bg-white hover:bg-slate-50">
                        <td className="px-4 py-3">{1000 + i}</td>
                        <td className="px-4 py-3">리스트 항목 {i + 1}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-amber-50 text-amber-700">진행</span>
                        </td>
                        <td className="px-4 py-3 text-slate-600">2025-10-21</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 많은 컬럼 (가로 스크롤 + 고정 1열) */}
            <div>
              <h2 className="font-medium mb-3">많은 컬럼 (가로 스크롤 + 고정 1열)</h2>
              <div className="overflow-auto max-h-72 rounded-lg border border-slate-200">
                <table className="min-w-[1200px] text-left text-xs md:text-sm">
                  <colgroup>
                    <col className="w-[160px]" />
                    <col className="w-[120px]" />
                    <col className="w-[200px]" />
                    <col className="w-[120px]" />
                    <col className="w-[140px]" />
                    <col className="w-[120px]" />
                    <col className="w-[120px]" />
                    <col className="w-[120px]" />
                    <col className="w-[120px]" />
                    <col className="w-[140px]" />
                    <col className="w-[140px]" />
                    <col className="w-[120px]" />
                  </colgroup>
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th className="px-3 py-2 font-semibold sticky left-0 z-10 bg-slate-50">이름</th>
                      <th className="px-3 py-2 font-semibold">부서</th>
                      <th className="px-3 py-2 font-semibold">이메일</th>
                      <th className="px-3 py-2 font-semibold">연락처</th>
                      <th className="px-3 py-2 font-semibold">도시</th>
                      <th className="px-3 py-2 font-semibold">국가</th>
                      <th className="px-3 py-2 font-semibold">직책</th>
                      <th className="px-3 py-2 font-semibold">상태</th>
                      <th className="px-3 py-2 font-semibold">권한</th>
                      <th className="px-3 py-2 font-semibold">생성일</th>
                      <th className="px-3 py-2 font-semibold">수정일</th>
                      <th className="px-3 py-2 font-semibold text-right">액션</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <tr key={i} className="bg-white hover:bg-slate-50">
                        <td className="px-3 py-2 sticky left-0 z-10 bg-white whitespace-nowrap">사용자 {i + 1}</td>
                        <td className="px-3 py-2">영업</td>
                        <td className="px-3 py-2 whitespace-nowrap">user{i + 1}@example.com</td>
                        <td className="px-3 py-2 whitespace-nowrap">010-1234-56{i.toString().padStart(2,'0')}</td>
                        <td className="px-3 py-2">서울</td>
                        <td className="px-3 py-2">대한민국</td>
                        <td className="px-3 py-2">매니저</td>
                        <td className="px-3 py-2">
                          <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] md:text-xs font-medium bg-emerald-50 text-emerald-700">Active</span>
                        </td>
                        <td className="px-3 py-2">Admin</td>
                        <td className="px-3 py-2 whitespace-nowrap">2025-08-0{(i%9)+1}</td>
                        <td className="px-3 py-2 whitespace-nowrap">2025-10-1{(i%9)}</td>
                        <td className="px-3 py-2 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button className="inline-flex items-center justify-center h-8 px-2.5 text-xs rounded-md bg-white border border-slate-300 hover:bg-slate-50">보기</button>
                            <button className="inline-flex items-center justify-center h-8 px-2.5 text-xs rounded-md bg-blue-600 text-white hover:bg-blue-700">편집</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>




          </section>
        </div>
      </div>


    </>
  );
}