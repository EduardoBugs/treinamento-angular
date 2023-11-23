import { FormControl } from '@angular/forms';

export interface FaleConoscoForm {
  name: FormControl<string | null>;
  mensagem: FormControl<string | null> ;
}