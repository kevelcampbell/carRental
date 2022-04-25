import React, {Component} from 'react';
import Select from 'react-select';
import {updateObject} from '../../services/utils'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class RiskChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyberSecurityPage: 9,
      cyberSecurityTotal: 0,
      cyberSecurityScore: false,
      riskAssesmentPage: 1,
      riskAssesmentTotal: 0,
      riskAssesmentScore: false,
      category: 'select',
      form: 'none',
      networkIds: null,
      booleanOptions: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ],
      networkIdsType: null,
      networkIdsTypeOptions: [
        { value: 'network', label: 'Network' },
        { value: 'host', label: 'Host' },
        { value: 'protocol', label: 'Protocol' },
        { value: 'hybrid', label: 'Hybrid' }
      ],
      rogueDevice: null,
      emailFilter: null,
      sensitizeStaff: null,
      antivirus: null,
      firewall: null,
      informationSecurityTeam: null,
      systemBackup: null,
      systemBackupDetails: null,
      osPatch: null,
      osPatchFrequency: null,
      accessControls: null,
      networkSegregated: null,
      deviceEncrypt: null,
      vpnTimeout : null,
      vpnTimeoutFrequency : null,
      multiAuth : null,
      ips : null,
      assetManagementUnit : null,
      lastPatch: new Date(),
      targetAppeal : null,
      principalAssets : null,
      destructionPolicy : null,
      industryBestPractice : null,
      dutySegregation : null,
      leastPrivilege : null,
      policyProcedure : null,
      operationSustain : null,
      dataCollectionReason : null,
      testMaxOperationTime : null,
      oldSystem : null,
      riskAntivirus : null,
      riskFirewall : null,
      riskMultiAuth : null,
      newSecurityThreats : null,
      maxOperationTime : null,
      securityPolicyRenewal : null,
      emailAdvisory : null,
    };
    this.handleNewDate = this.handleNewDate.bind(this);
  }
  clearForm = () => {
    this.setState({
      cyberSecurityPage: 1,
      category: 'select',
      form: 'none',
      networkIds: null,
      networkIdsType: null,
      rogueDevice: null,
      emailFilter: null,
      sensitizeStaff: null,
      antivirus: null,
      firewall: null,
      informationSecurityTeam: null,
      systemBackup: null,
      systemBackupDetails: null,
      osPatch: null,
      osPatchFrequency: null,
      accessControls: null,
      networkSegregated: null,
      deviceEncrypt: null,
      vpnTimeout : null,
      vpnTimeoutFrequency : null,
      multiAuth : null,
      ips : null,
      assetManagementUnit : null,
      lastPatch: new Date(),
      targetAppeal : null,
      principalAssets : null,
      destructionPolicy : null,
      industryBestPractice : null,
      dutySegregation : null,
      leastPrivilege : null,
      policyProcedure : null,
      operationSustain : null,
      dataCollectionReason : null,
      testMaxOperationTime : null,
      oldSystem : null,
      riskAntivirus : null,
      riskFirewall : null,
      riskMultiAuth : null,
      newSecurityThreats : null,
      maxOperationTime : null,
      securityPolicyRenewal : null,
      emailAdvisory : null,
    })
  }
  handleChange = () => async (event) => {
    this.setState({[event.target.name]: await event.target.value})
  }
  handleNewDate(date) {
    this.setState({
      lastPatch: date
    })
  }
  inputChangeHandler = (controlName) => async (event) => {
    if (controlName==='networkIds') {
      const updateState = await updateObject(this.state.networkIds, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='rogueDevice') {
      const updateState = await updateObject(this.state.rogueDevice, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='emailFilter') {
      const updateState = await updateObject(this.state.emailFilter, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='sensitizeStaff') {
      const updateState = await updateObject(this.state.sensitizeStaff, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='antivirus') {
      const updateState = await updateObject(this.state.antivirus, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='firewall') {
      const updateState = await updateObject(this.state.firewall, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='informationSecurityTeam') {
      const updateState = await updateObject(this.state.informationSecurityTeam, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='systemBackup') {
      const updateState = await updateObject(this.state.systemBackup, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='osPatch') {
      const updateState = await updateObject(this.state.osPatch, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='accessControls') {
      const updateState = await updateObject(this.state.accessControls, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='networkSegregated') {
      const updateState = await updateObject(this.state.networkSegregated, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='deviceEncrypt') {
      const updateState = await updateObject(this.state.deviceEncrypt, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='vpnTimeout') {
      const updateState = await updateObject(this.state.vpnTimeout, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='multiAuth') {
      const updateState = await updateObject(this.state.multiAuth, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='ips') {
      const updateState = await updateObject(this.state.ips, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='assetManagementUnit') {
      const updateState = await updateObject(this.state.assetManagementUnit, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='industryBestPractice') {
      const updateState = await updateObject(this.state.industryBestPractice, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='dutySegregation') {
      const updateState = await updateObject(this.state.dutySegregation, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='leastPrivilege') {
      const updateState = await updateObject(this.state.leastPrivilege, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='policyProcedure') {
      const updateState = await updateObject(this.state.policyProcedure, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='operationSustain') {
      const updateState = await updateObject(this.state.operationSustain, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='dataCollectionReason') {
      const updateState = await updateObject(this.state.dataCollectionReason, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='oldSystem') {
      const updateState = await updateObject(this.state.oldSystem, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='riskAntivirus') {
      const updateState = await updateObject(this.state.riskAntivirus, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='riskFirewall') {
      const updateState = await updateObject(this.state.riskFirewall, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='riskMultiAuth') {
      const updateState = await updateObject(this.state.riskMultiAuth, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='newSecurityThreats') {
      const updateState = await updateObject(this.state.newSecurityThreats, {
        value: event.value,
      }).value;
      this.setState({[controlName]: updateState})
    } if (controlName==='testMaxOperationTime') {
        const updateState = await updateObject(this.state.testMaxOperationTime, {
          value: event.value,
        }).value;
        this.setState({[controlName]: updateState})
    } else {
      this.setState({[controlName]: event.value});
    }
  }
  handleSecurityAssesment = async (event) => {
    event.preventDefault();
    let total = 0;
    if (this.state.networkIds==='yes') {total = total + 2};
    if (this.state.rogueDevice==='yes') {total = total + 2};
    if (this.state.emailFilter==='yes') {total = total + 2};
    if (this.state.sensitizeStaff==='yes') {total = total + 3};
    if (this.state.antivirus==='yes') {total = total + 2};
    if (this.state.firewall==='yes') {total = total + 2};
    if (this.state.informationSecurityTeam==='yes') {total = total + 3};
    if (this.state.systemBackup==='yes') {total = total + 3};
    if (this.state.osPatch==='yes') {total = total + 2};
    if (this.state.accessControls==='yes') {total = total + 2};
    if (this.state.networkSegregated==='yes') {total = total + 2};
    if (this.state.deviceEncrypt==='yes') {total = total + 3};
    if (this.state.vpnTimeout==='yes') {total = total + 2};
    if (this.state.multiAuth==='yes') {total = total + 3};
    if (this.state.ips==='yes') {total = total + 3};
    if (this.state.assetManagementUnit==='yes') {total = total + 3};
    const updateState = await updateObject(this.state.cyberSecurityTotal, {
      value: total,
    }).value;
    const controlName = "cyberSecurityTotal"
    this.setState({[controlName]: updateState})
    this.setState({"cyberSecurityScore": true})
    this.clearForm();
  }
  handleRiskAssessment = async (event) => {
    event.preventDefault();
    let total = 0;
    if (this.state.newSecurityThreats==='yes') {total = total + 2};
    if (this.state.targetAppeal) {total = total + 1};
    if (this.state.principalAssets) {total = total + 3};
    if (this.state.dataCollectionReason==='yes') {total = total + 2};
    if (this.state.destructionPolicy) {total = total + 3};
    if (this.state.industryBestPractice==='yes') {total = total + 1};
    if (this.state.dutySegregation==='yes') {total = total + 2};
    if (this.state.leastPrivilege==='yes') {total = total + 2};
    if (this.state.policyProcedure==='yes') {total = total + 3};
    if (this.state.operationSustain==='yes') {total = total + 3};
    if (this.state.maxOperationTime==='yes') {total = total + 1};
    if (this.state.testMaxOperationTime==='yes') {total = total + 1};
    if (this.state.securityPolicyRenewal) {total = total + 3};
    if (this.state.emailAdvisory) {total = total + 2};
    if (this.state.oldSystem==='yes') {total = total + 3};
    if (this.state.riskAntivirus==='yes') {total = total + 3};
    if (this.state.riskFirewall==='yes') {total = total + 3};
    if (this.state.riskMultiAuth) {total = total + 3};
    const updateState = await updateObject(this.state.riskAssesmentTotal, {
      value: total,
    }).value;
    const controlName = "riskAssesmentTotal"
    this.setState({[controlName]: updateState})
    this.setState({"riskAssesmentScore": true})
    this.clearForm();
  }
  render() {
    let category
    if (this.state.category === 'select') {
      category = (
        <div>
          <h1 className='text-center pt-2'>Choose a category to be assessed</h1>
          <div class="row text-center">
            <button class="col category" type="button" onClick={() => this.setState({ category: 'cyberSecurity' })}>Cyber Security</button>
            <button class="col category" type="button" onClick={() => this.setState({ category: 'riskAssessment' })}>Risk Assessment</button>
          </div>
          {this.state.cyberSecurityScore ?
            <div>
              Cyber Security Score: {this.state.cyberSecurityTotal + '/39'}
            </div>: null
          }
          {this.state.riskAssesmentScore ?
            <div>
              Risk Assessment Score: {this.state.riskAssesmentTotal + '/41'}
            </div>: null
          }
          {this.state.cyberSecurityScore && this.state.riskAssesmentScore ?
            <div>
              overall Score: {(this.state.riskAssesmentTotal + this.state.cyberSecurityTotal) + '/80'}
            </div>: null
          }
        </div>
      )
    }
    if (this.state.category === 'cyberSecurity') {
      category = (
        <div>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ category: 'select' })}>Back</button>
          <h1 className='text-center pt-2'>Cyber Security</h1>
          <br/>
          <form onSubmit={this.handleSecurityAssesment}>
          {this.state.cyberSecurityPage === 1 ?
            <div class="form-group text-center">
              <label for="networkIds">
                Does the network use an IDS?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="booleanOptions"
                onChange={this.inputChangeHandler('networkIds')}/>
              <br/>
              {this.state.networkIds && (this.state.networkIds === 'yes') ?
                <div>
                  <label for="networkIdsType">
                    what type (network, host, protocol, or hybrid)?
                  </label>
                  <Select
                    options={this.state.networkIdsTypeOptions}
                    name="networkIdsTypeOptions"
                    onChange={this.inputChangeHandler('networkIdsType')}/>
                </div> : null
              }
              <br/>
              <button disabled={!this.state.networkIds} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
            </div> : null
            }
            {this.state.cyberSecurityPage === 2 ?
              <div class="form-group text-center">
                <label for="rogueDevice">
                  Can a rogue device be connected to the network and be given an IP?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="rogueDevice"
                  onChange={this.inputChangeHandler('rogueDevice')}/>
                  <br/>
                  <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                  <button disabled={!this.state.rogueDevice} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 3 ?
              <div class="form-group text-center">
                <label for="emailFilter">
                  Are email filters being used??
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="emailFilter"
                  onChange={this.inputChangeHandler('emailFilter')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.emailFilter} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 4 ?
              <div class="form-group text-center">
                <label for="rogueDevice">
                  Do you sensitize your staff on social engineering? <br/> Especially on how phishing works?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="sensitizeStaff"
                  onChange={this.inputChangeHandler('sensitizeStaff')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.sensitizeStaff} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 5 ?
              <div class="form-group text-center">
                <label for="antivirus">
                  Does the system (inclusing all devices) have an antivirus?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="antivirus"
                  onChange={this.inputChangeHandler('antivirus')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.antivirus} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 6 ?
              <div class="form-group text-center">
                <label for="firewall">
                  Does the system (every device) have an active firewall?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="firewall"
                  onChange={this.inputChangeHandler('firewall')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.firewall} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 7 ?
              <div class="form-group text-center">
                <label for="informationSecurityTeam">
                  Does the company have an information security team to monitor and secure the company's information system?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="informationSecurityTeam"
                  onChange={this.inputChangeHandler('informationSecurityTeam')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.informationSecurityTeam} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 8 ?
              <div class="form-group text-center">
                <label for="systemBackup">
                  Are critical systems backed up? 
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="systemBackup"
                  onChange={this.inputChangeHandler('systemBackup')}/>
                <br/>
                {this.state.systemBackup && (this.state.systemBackup === 'yes') ?
                  <div>
                    <label for="systemBackupDetails">
                      how often, where and how are they being stored?
                    </label>
                    <input type="text" class="form-control" 
                      id="systemBackupDetails"
                      name="systemBackupDetails"
                      placeholder="(once per Week, cloud, cloud server)"
                      value={this.state.systemBackupDetails}
                      onChange={this.handleChange()}/>
                  </div> : null
                }
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.systemBackup} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 9 ?
              <div class="form-group text-center">
                <label for="osPatch">
                  Are OS Patches being installed?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="osPatch"
                  onChange={this.inputChangeHandler('osPatch')}/>
                <br/>
                {this.state.osPatch && (this.state.osPatch === 'yes') ?
                <div>
                  <label for="osPatchFrequency">
                    How often?  
                  </label>
                  <input type="text" class="form-control" 
                    id="osPatchFrequency"
                    name="osPatchFrequency"
                    placeholder="(once per Week)"
                    value={this.state.osPatchFrequency}
                    onChange={this.handleChange()}/>
                  <br/>
                  <label for="lastPatch">
                    When was the last patch installed?
                  </label>
                  <DatePicker
                    className="form-control"
                    selected={this.state.lastPatch}
                    onChange={this.handleNewDate}
                    name="lastPatch"
                  />
                  </div> : null 
                }
              <br/>
              <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
              <button disabled={!this.state.osPatch} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
            </div> : null
            }
            {this.state.cyberSecurityPage === 10 ?
              <div class="form-group text-center">
                <label for="accessControls">
                  Are access controls being used to protect critical and non-critical systems?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="accessControls"
                  onChange={this.inputChangeHandler('accessControls')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.accessControls} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 11 ?
              <div class="form-group text-center">
                <label for="networkSegregated">
                  Are different networks segregated from each other?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="networkSegregated"
                  onChange={this.inputChangeHandler('networkSegregated')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.networkSegregated} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 12 ?
              <div class="form-group text-center">
                <label for="deviceEncrypt">
                  Do you encrypt your devices or disks?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="deviceEncrypt"
                  onChange={this.inputChangeHandler('deviceEncrypt')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.deviceEncrypt} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 13 ?
              <div class="form-group text-center">
                <label for="vpnTimeout">
                  Does your VPN access time out? 
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="vpnTimeout"
                  onChange={this.inputChangeHandler('vpnTimeout')}/>
                <br/>
                {this.state.vpnTimeout && (this.state.vpnTimeout === 'yes') ?
                  <div>
                    <label for="vpnTimeoutFrequency">
                      How often?  
                    </label>
                    <input type="text" class="form-control" 
                      id="vpnTimeoutFrequency"
                      name="vpnTimeoutFrequency"
                      placeholder="(5 mins, 10 mins)"
                      value={this.state.vpnTimeoutFrequency}
                      onChange={this.handleChange()}/>
                  </div> : null
                }
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.vpnTimeout} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 14 ?
              <div class="form-group text-center">
                <label for="multiAuth">
                  Is multi-factor authentication being used?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="multiAuth"
                  onChange={this.inputChangeHandler('multiAuth')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.multiAuth} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 15 ?
              <div class="form-group text-center">
                <label for="ips">
                  Do all critical systems have an IPS?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="ips"
                  onChange={this.inputChangeHandler('ips')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <button disabled={!this.state.ips} class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.cyberSecurityPage === 16 ?
              <div class="form-group text-center">
                <label for="assetManagementUnit">
                  Is there an asset management unit that oversees the acquisition and disposal of assets?
                </label>
                <Select
                  options={this.state.booleanOptions}
                  name="assetManagementUnit"
                  onChange={this.inputChangeHandler('assetManagementUnit')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
                <input disabled={!this.state.assetManagementUnit} class="form-cotrol" type="submit" value="Submit"/>
              </div> : null
            }
          </form>
        </div>
      )
    }
    if (this.state.category === 'riskAssessment') {
      category = (
        <div>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ category: 'select' })}>Back</button>
          <h1 className='text-center pt-2'>Risk Assessment</h1>
          <br/>
          <form onSubmit={this.handleRiskAssessment}>
          {this.state.riskAssesmentPage === 1 ?
            <div class="form-group text-center">
              <label for="newSecurityThreats">
                Does the organisation keep abreast of the new security threats?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="newSecurityThreats"
                onChange={this.inputChangeHandler('newSecurityThreats')}/>
                <br/>
                <button disabled={!this.state.newSecurityThreats} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 2 ?
            <div class="form-group text-center">
              <label for="targetAppeal">
                What makes your company or service an appealing target for hackers and cyber criminals?
              </label>
              <input type="text" class="form-control" 
                id="targetAppeal"
                name="targetAppeal"
                placeholder="Appeal"
                value={this.state.targetAppeal}
                onChange={this.handleChange()}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.targetAppeal} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 3 ?
            <div class="form-group text-center">
              <label for="principalAssets">
                In the worst-case scenario, what are our principal assets and “crown jewels” that could be compromised?
              </label>
              <input type="text" class="form-control" 
                id="principalAssets"
                name="principalAssets"
                placeholder="Principal Assets"
                value={this.state.principalAssets}
                onChange={this.handleChange()}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.principalAssets} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 4 ?
            <div class="form-group text-center">
              <label for="dataCollectionReason">
                Is there a valid business reason for retaining existing information and collecting new data?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="dataCollectionReason"
                onChange={this.inputChangeHandler('dataCollectionReason')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.dataCollectionReason} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 5 ?
            <div class="form-group text-center">
              <label for="destructionPolicy">
                What are your data minimization and destruction policies and procedures
              </label>
              <input type="text" class="form-control" 
                id="destructionPolicy"
                name="destructionPolicy"
                placeholder="Policies and Procedures"
                value={this.state.destructionPolicy}
                onChange={this.handleChange()}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.destructionPolicy} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 6 ?
            <div class="form-group text-center">
              <label for="industryBestPractice">
                Is the organisation utilising industry best practices
              </label>
              <Select
                options={this.state.booleanOptions}
                name="industryBestPractice"
                onChange={this.inputChangeHandler('industryBestPractice')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.industryBestPractice} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 7 ?
            <div class="form-group text-center">
              <label for="dutySegregation">
                Is segregation of duties being practised?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="dutySegregation"
                onChange={this.inputChangeHandler('dutySegregation')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.dutySegregation} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 8 ?
            <div class="form-group text-center">
              <label for="leastPrivilege">
                Are users given the least amount of privilege needed to get their job done?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="leastPrivilege"
                onChange={this.inputChangeHandler('leastPrivilege')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.leastPrivilege} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 9 ?
            <div class="form-group text-center">
              <label for="policyProcedure">
                Are policies backed up with procedures &amp; standards?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="policyProcedure"
                onChange={this.inputChangeHandler('policyProcedure')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.policyProcedure} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 10 ?
            <div class="form-group text-center">
              <label for="operationSustain">
                Can you sustain business operations without access to specific systems?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="operationSustain"
                onChange={this.inputChangeHandler('operationSustain')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.operationSustain} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 11 ?
            <div class="form-group text-center">
              <label for="maxOperationTime">
                How long can the system operate?
              </label>
              <input type="text" class="form-control" 
                id="maxOperationTime"
                name="maxOperationTime"
                placeholder="(5 hours, 10 hours)"
                value={this.state.maxOperationTime}
                onChange={this.handleChange()}/>
              <br/>
              <label for="testMaxOperationTime">
                Have you tested this?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="testMaxOperationTime"
                onChange={this.inputChangeHandler('testMaxOperationTime')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.testMaxOperationTime} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 12 ?
            <div class="form-group text-center">
              <label for="securityPolicyRenewal">
                How often are information security policies reviewed?
              </label>
              <input type="text" class="form-control" 
                id="securityPolicyRenewal"
                name="securityPolicyRenewal"
                placeholder="(Weekly, Monthly)"
                value={this.state.securityPolicyRenewal}
                onChange={this.handleChange()}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.securityPolicyRenewal} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 13 ?
            <div class="form-group text-center">
              <label for="emailAdvisory">
                Do we have an email advisory?
              </label>
              <input type="text" class="form-control" 
                id="emailAdvisory"
                name="emailAdvisory"
                placeholder="E.g. Email Policy Violation - A maximum number of allowed recipients exceeded?"
                value={this.state.emailAdvisory}
                onChange={this.handleChange()}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.emailAdvisory} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 14 ?
            <div class="form-group text-center">
              <label for="oldSystem">
                Is there any old OS that are no longer being supported connected to the network?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="oldSystem"
                onChange={this.inputChangeHandler('oldSystem')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.oldSystem} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 15 ?
            <div class="form-group text-center">
              <label for="riskAntivirus">
                Does the system (inclusing all devices) have an antivirus?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="riskAntivirus"
                onChange={this.inputChangeHandler('riskAntivirus')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.riskAntivirus} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 16 ?
            <div class="form-group text-center">
              <label for="riskFirewall">
                Does the system (every device) have an active firewall?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="riskFirewall"
                onChange={this.inputChangeHandler('riskFirewall')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <button disabled={!this.state.riskFirewall} class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage + 1 })}>Next</button>
              </div> : null
            }
            {this.state.riskAssesmentPage === 17 ?
            <div class="form-group text-center">
              <label for="riskMultiAuth">
                Is multi-factor authentication being used?
              </label>
              <Select
                options={this.state.booleanOptions}
                name="riskMultiAuth"
                onChange={this.inputChangeHandler('riskMultiAuth')}/>
                <br/>
                <button class="form-cotrol" type="button" onClick={() => this.setState({ riskAssesmentPage: this.state.riskAssesmentPage - 1 })}>Back</button>
                <input disabled={!this.state.riskMultiAuth} class="form-cotrol" type="submit" value="Submit"/>
              </div> : null
            }
          </form>
        </div>
      )
    }
    return (
      <div className='container'>
        <h1 className='text-left pt-2'>Customer Risk Profifle</h1>
        <br/>
        {category}
      </div>
    );
  }
}

export default RiskChecker;
