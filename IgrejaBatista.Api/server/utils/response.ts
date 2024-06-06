import {H3Event, EventHandlerRequest} from "h3"
import HttpResponse from "../types/Response";

const response = (event:  H3Event<EventHandlerRequest>, data: HttpResponse) => {
    try {
        setResponseStatus(event, data.code);
        return send(event, JSON.stringify(data));
    }catch(e){
        throw createError({
            statusCode: 500,
            message: "An error occurred while creating the response",
            data: {
                event: event,
                data: data,
            },
            fatal: true,
        })
    }
}

export default response;