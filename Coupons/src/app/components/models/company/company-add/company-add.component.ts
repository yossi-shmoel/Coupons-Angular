import { Company } from './../../../../models/company';
import { CompaniesService } from './../../../../services/companies.service';
import { Component, OnInit } from '@angular/core';
import { nfapply } from 'q';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  private company = new Company(null, null);
  private companyName: string;
  private companyEmail: string;

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
  }

  private sendForm(): void {
    this.companiesService.CreateOrUpdate(this.company).subscribe();
  }
}
