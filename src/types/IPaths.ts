import { Immutable } from '@src/other/types';

export interface IPaths {
    Base: string,
    Auth: {
        Base: string,
        Login: string,
        Logout: string
    },
    Users: {
        Base: string,
        Get: string,
        Add: string,
        Update: string,
        Delete: string
    }
}

// export type Paths = Immutable<typeof process.env.PATHS>