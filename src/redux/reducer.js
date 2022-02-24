import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

//chức năng reducer sẽ nhận đc state hiện tại và sau đó là 1 hành động => để tạo state tiếp theo cần state hiện tại và 1 action
//vì là function thuần tuý nên k thể sửa đổi state trực tiếp tại đây
//ES6: chỉ định giá trị mặc định cho 1 tham số, khi store gọi reducer lần đầu tiên, store sẽ k có state vì vậy state sẽ k đc khởi tạo, do đó
//state = initialState có nghĩa là khi k có state thì giá trị mặc định là initialState sẽ đc dùng
export const Reducer = (state = initialState, action) => {
    //chưa có hành đông nào nên mặc định trả lại state
    return state;
};
//cần có hàm reducer vì store cần biết pahir làm j khi 1 action đc thực hiện
