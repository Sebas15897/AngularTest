import { Posts } from "./posts.model";

export class AddPost {
    static readonly type='[POST] Add';
    constructor(public payload: Posts) {}
}

export class RemovePost {
    static readonly type='[POST] Remove';
    constructor(public payload: string) {}
}
