
/**
 * 定义每个序号中的问题对（两种情况的问题）
 */
interface iQuestion {
    
    /**
     * 问题内容
     */
    item: string;

    /**
     * 问题对应的 “选择” 16个字母其中一个
     */
    option: string;
}

/**
 * 定义数据模型类
 */
interface iMbtiModel {

    /**
     * 序号
     */
    no: number;
    
    /**
     * 问题数据 （对象数组）
     */
    question: iQuestion[]

}


// 定义 class
export class QuestionClass implements iQuestion {
    item: string;
    option: string;

    constructor(item: string, option: string) {
        this.item = item;
        this.option = option;
    }

}


/**
 * MBTI数据模型
 */
export class MbtiModelClass implements iMbtiModel {
    no: number;
    question: iQuestion[];

    constructor(no: number, question: iQuestion[]) {
        this.no = no;
        this.question = question;
    }
}

