import { ActivatedRoute } from '@angular/router';
import { Company } from './../../../../models/company';
import { CompaniesService } from './../../../../services/companies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-viewer',
  templateUrl: './companies-viewer.component.html',
  styleUrls: ['./companies-viewer.component.css']
})
export class CompaniesViewerComponent implements OnInit {

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
