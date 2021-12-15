import React, { Fragment } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export const Loader = React.memo(({ children, loading, color, size }) =>
    <>
        {!(!loading) && <PulseLoader size={size ? size : 10} color={"green"} loading />}
        {!loading && <>{children}</>}
    </>
)
export const BoxLoader = React.memo(({ children, loading, color, size, disable }) =>
    <>
        {!!(loading || disable) &&
            <div className="fixed h-full w-full t-0 z-50 bg-gray-100 opacity-25 flex items-center justify-center">
                {!!loading &&
                <PulseLoader size={size ? size : 30} color={"#178c5f"} loading />}
            </div>}
        {children}
    </>
)

