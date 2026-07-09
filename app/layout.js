import "./globals.css";

export const metadata = {
  title: "暖爪宠物洗护 | 专业宠物洗澡美容护理",
  description: "暖爪为猫咪和狗狗提供洗澡、美容、护理、除味和皮毛养护服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
