import Validation from "@plugin/validation";
import rules from "@plugin/validation/rules";

export default Validation(Object.assign({
    isNoZero: (value, field, message) => value !== 0 || message || $t('validation.is_no_zero')
}, rules));
