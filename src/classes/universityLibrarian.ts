import * as Interfaces from '../interfaces';
import {format, logger, logMethod, logParameter, sealed, writable} from '../decorators';

@logger
@sealed('UniversityLibrarian')
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;
    @logMethod
    assistCustomer(@logParameter custName: string,@logParameter bookTitle: string) {
        console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
    }

    // @writable(true)
    assistFaculty() {
        console.log('Assist faculty');
    }
    // @writable(false)
    teachCommunity() {
        console.log('Teaching community');
    }
}
