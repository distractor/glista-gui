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

/**
 * Add new scoring DTO validator.
 */
export const AddNewScoringDTOValidator = {
    name: {
        required,
    },
    type: {
        required,
    },
    tables: {
        required,
    }
};
