import { CompaniesService } from './../../../../services/companies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {

  private company: Company;
  constructor(private activatedRoute: ActivatedRoute, private companiesService: CompaniesService) { }

  ngOnInit() {
    const companyId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    const ob = this.companiesService.Get(companyId).subscribe(c => this.company = c);

  }

  private sendForm(): void {
   // alert(this.company.Id);
  }
}
