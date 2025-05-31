import Topbar from "./Topbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="home-container">
      <Topbar />
      {children}
      <div className="footer">
        <div className="footer-text-container">
          <p>Nenagenix 2024 ©</p>
          <p>Bohemian Groove Corp ®</p>
        </div>
      </div>
    </div>
  );
} 