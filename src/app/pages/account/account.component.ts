import { Component, OnInit, TemplateRef } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';

import { AccountData } from '../../@core/data/account';

interface DataItem {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  role: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
  align: 'left' | 'right' | 'center';
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private service: AccountData, private message: NzMessageService) { 
    this.fetchAccount();
  }

  ngOnInit() {
  }

  listOfData: DataItem[] = [];
  listOfColumns: ColumnItem[] = [];

  fetchAccount() {
    this.service.fetchAccounts().subscribe(res => {
      this.listOfData = res;

      this.listOfColumns = [
        {
          name: 'STT',
          sortOrder: null,
          sortFn: null,
          sortDirections: [null, null],
          listOfFilter: [],
          filterFn: null,
          filterMultiple: false,
          align: 'center'
        },
        {
          name: 'Họ',
          sortOrder: null,
          sortFn: null,
          sortDirections: ['ascend', 'descend', null],
          filterMultiple: true,
          listOfFilter: [],
          filterFn: null,
          align: 'center'
        },
        {
          name: 'Tên',
          sortOrder: 'descend',
          sortFn: null,
          sortDirections: ['descend', null],
          listOfFilter: [],
          filterFn: null,
          filterMultiple: true,
          align: 'center'
        },
        {
          name: 'Tên đăng nhập',
          sortOrder: 'descend',
          sortFn: null,
          sortDirections: ['descend', null],
          listOfFilter: [],
          filterFn: null,
          filterMultiple: true,
          align: 'center'
        },
        {
          name: 'Email',
          sortOrder: null,
          sortDirections: ['ascend', 'descend', null],
          sortFn: null,
          filterMultiple: false,
          listOfFilter: [],
          filterFn: null,
          align: 'center'
        },
        {
          name: 'Vai trò',
          sortOrder: 'descend',
          sortFn: null,
          sortDirections: ['descend', null],
          listOfFilter: [],
          filterFn: null,
          filterMultiple: true,
          align: 'center'
        },
        {
          name: 'Tùy chọn',
          sortOrder: 'descend',
          sortFn: null,
          sortDirections: ['descend', null],
          listOfFilter: [],
          filterFn: null,
          filterMultiple: false,
          align: 'center'
        },
      ]
    });
  }

  

  deleteAccount(id: number) {
    const ask = window.confirm('Bạn có chắc chắn muốn xóa tài khoản này?')
    if (ask) {
      this.service.deleteAccount(id).subscribe(response => {
        if (response.deleted === true) {
          this.fetchAccount();
          this.message.create('success', 'Xóa tài khoản thành công');
        } else {
          this.message.create('error', 'Xóa tài khoản thất bại');
        }
      })
    }
  } 
}
