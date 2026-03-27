// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

// export function proxy(request: NextRequest) {
//   const url = request.nextUrl.clone();
//   const protoHeader = request.headers.get("x-forwarded-proto");
//   const isHttp = url.protocol === "http:" || protoHeader === "http";
//   const isLocal = LOCAL_HOSTS.has(url.hostname);

//   if (isHttp && !isLocal) {
//     url.protocol = "https:";
//     return NextResponse.redirect(url, 308);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
// };
