import { FormEventHandler, ReactElement, ReactNode, SyntheticEvent } from "react"
import { FieldValues, UseFormRegister } from "react-hook-form"

//API types
export interface IUserLoginData {
    email: string,
    password: string,
}
export interface IUserRegisterData extends IUserLoginData {
    username: string
}

export interface IRegisterUserResponse {
    data: {
        email: string,
        username: string,
        id: string,
    }
}

export interface ILoginUserResponse {
    accessToken: string,
    refreshToken: string,
    sid: string,
    todaySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    },
    user: {
        email: string,
        username: string,
        userData: {
            weight: number,
            height: number,
            age: number,
            bloodType: number,
            desiredWeight: number,
            dailyRate: number,
            notAllowedProducts: string[]
        },
        id: string
    }
}

export interface IToken {
    token: string
}

export interface IDataRefresh extends IToken {
    sid: string
}

export interface IDailyRateRequest {
    weight: number,
    height: number,
    age: number,
    desiredWeight: number,
    bloodType: number
}

export interface IDailyRateResponseData {
    dailyRate: number,
    notAllowedProducts: string[],
    summaries: {
        _id: string,
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number
    }[];
}

export interface IDailyRateResponse {
    data: IDailyRateResponseData
}

export interface IFindProduct extends IToken {
    searchText: string;
}

export interface IProductItem {
    calories: number,
    categories: {
        ru: string,
        uk: string,
        en: string
    },
    groupBloodNotAllowed: [null, boolean, boolean, boolean, boolean],
    title: {
        ua: string,
        ru?: string,
        en: string
    },
    weight: number,
    _id: string
}

export type FindProductResponse = {
    data: IProductItem[]
}

export interface IEatenProductRequest {
    date: string;
    productId: string,
    weight: number
}

export interface IEatenProductResponse {
    eatenProduct: IEatenProduct,
    day: {
        id: string,
        eatenProducts: IEatenProduct[],
        date: string,
        daySummary: string
    },
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    }
}

export interface IDeleteRequest {
    dayId: string;
    eatenProductId: string;
}

export interface IGetDayInfo extends IToken {
    date: string
}

export interface IGetDayInfoResponse {
    id: string,
    eatenProducts: IEatenProduct[],
    date: string,
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number,
        userId: string,
        id: string
    }
}

export interface IGetDayInfoNewDayResponse {
    kcalLeft: number,
    kcalConsumed: number,
    dailyRate: number,
    percentsOfDailyRate: number,
}

//Reducers types
export interface IBurgerMenuState {
    showBurgerMenu: boolean,
}

export interface IEatenProduct {
    title: string | number,
    weight: number,
    kcal: number,
    id: string
}

export interface IDayInfo {
    id: string,
    eatenProducts: IEatenProduct[],
    daySummary: {
        date: string,
        kcalLeft: number,
        kcalConsumed: number,
        dailyRate: number,
        percentsOfDailyRate: number
    }
}

export interface IModalState {
    showModal: boolean,
}

export interface IProductSearchState {
    filteredProducts: IProductItem[]
}

export interface IUserState {
    accessToken: string,
    refreshToken: string,
    sid: string,
    user: {
        email: string,
        username: string,
        userData: {
            weight: number,
            height: number,
            age: number,
            bloodType: number,
            desiredWeight: number,
            dailyRate: number,
            notAllowedProducts: string[]
        },
        id: string,
    }
}

//Components types
export interface IOutputText {
    text: string | number;
    className?: string;
}

export interface IAddProductFormProps {
    onInput?: FormEventHandler<HTMLInputElement>
}

export interface Inputs {
    productName: string,
    weight: number
}

export interface IAddProductFormModalProps {
    onInput?: FormEventHandler<HTMLInputElement>
}

export interface IFormData {
    email: string,
    password: string
}

export interface IRegistrationFormData {
    username: string,
    email: string,
    password: string,
    repeatedPassword: string
}

export interface IButton {
    id?: string | null,
    name?: string,
    className: string,
    type?: 'button' | 'reset' | 'submit',
    onClick?: (e?: SyntheticEvent) => void,
    children?: ReactNode,
}

export interface IGetSvg {
    name: string;
    className: string;
}

export interface IRules {
    required?: string | boolean;
    minLength?: {
        value: number;
        message: string
    } | number;
    maxLength?: {
        value: number;
        message: string
    } | number;
    pattern?: {
        value: RegExp;
        message: string
    };
    validate?: (value: string) => boolean | string;
}

export interface ILabelInput {
    listName?: string | null,
    labelHtmlFor: string,
    type: 'telephone' | 'email' | 'text' | 'password',
    labelText: string,
    onInput?: FormEventHandler<HTMLInputElement>,
    register?: UseFormRegister<FieldValues> | null,
    rules?: IRules | null,
    optionsArray?: IProductItem[]
}

export interface IProtectedRouteProps {
    children: ReactElement,
    criteria: string | boolean,
    path: string
}