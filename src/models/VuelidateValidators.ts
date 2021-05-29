import { required, integer } from "vuelidate/lib/validators";

/**
 * Id validator.
 */
export const IdValidator = { required, integer };

/**
 * Add new event group DTO validator.
 */
export const AddNewEventGroupDTOValidator = {
    scoringId: IdValidator,
    name: {
        required,
    }
};
