
"use client"


export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">

                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
                        404
                    </h1>
                </div>


                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Sorry, we couldn't find the page you're looking for.
                        The page might have been moved, deleted, or doesn't exist.
                    </p>
                </div>


            </div>
        </div>
    )
}