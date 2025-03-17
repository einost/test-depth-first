import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.scss';
import { ConfigProvider } from 'antd';

export const metadata: Metadata = {
  title: 'Test Depth First',
  description: 'เทสระบบสมัครสมาชิก',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#1c4650',
              },
            }}>
            <main>{children}</main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
