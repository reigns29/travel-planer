import { buildConfig } from "payload/config"
import path from "path"
import { Admins, Users, Follows, Posts, Likes } from "./collections"

export default buildConfig({
  serverURL: process.env.RENDER_EXTERNAL_URL || process.env.SERVER_URL,
  admin: {
    user: Admins.slug,
    // webpack: (config) => ({
		// 	...config,
		// 	resolve: {
		// 		...config.resolve,
		// 		alias: {
		// 			...config.resolve.alias,
		// 			fs: path.resolve(__dirname, "mocks/emptyObject.js"),
		// 		}
		// 	}
		// })
  },
  collections: [Admins, Users, Follows, Posts, Likes],
  csrf: [String(process.env.CLIENT_URL)],
  cors: [String(process.env.CLIENT_URL)],
  cookiePrefix: "auth",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
})
