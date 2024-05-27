import { H3Event, EventHandlerRequest } from "h3";
import { AnyObjectSchema, ObjectSchema } from "yup";

type SchemaData<T> = T extends ObjectSchema<infer U> ? U : never;

const validateBodyParams = async <T extends AnyObjectSchema>(event: H3Event<EventHandlerRequest>, eventSchema: T): Promise<SchemaData<T>> => {
    
    const body = await readBody(event);
    const validatedBody = await eventSchema.validate(body, { stripUnknown: true }).catch(error => {
        throw error;
    });
    return validatedBody;
}

export default validateBodyParams;
