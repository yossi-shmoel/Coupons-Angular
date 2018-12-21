import { ActivatedRoute } from '@angular/router';
import { Company } from './../../../../models/company';
import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  companies: Company[] = [];
  company: Company;
  constructor(private companiesService: CompaniesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const companyId = parseInt(this.activatedRoute.snapshot.params.id, 10);
    if (companyId === 0) {
      this.companiesService.GetAll().subscribe(c => this.companies = c);
    } else {
     this.companiesService.Get(companyId).subscribe(c =>  {
       this.company = c;
       this.companies.push(new Company(this.company.Name, this.company.Email, this.company.Id));
      });
    }
  }

}
