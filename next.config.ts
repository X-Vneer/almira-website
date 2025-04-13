import { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
