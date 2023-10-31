export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p className="title">현대카드 무이자이벤트중</p>
      {children}
    </div>
  );
}
